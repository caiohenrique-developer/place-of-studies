import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import authConfig from '@config/auth';

interface RequestDTO {
	email: string;
	password: string;
}

interface Response {
	user: User;
	token: string;
}

class AuthenticateUserService {
	public async execute({ email, password }: RequestDTO): Promise<Response> {
		// get the default methods of typeorm (getRepository)
		const userRepository = getRepository(User);

		// verify if email received exist on database
		const user = await userRepository.findOne({
			where: { email },
		});

		// if user is not exist, return error
		if (!user) {
			throw new AppError('Incorrect email/password combination.', 401);
		}

		// compare password received with the password crypted on database
		const passwordMatched = await compare(password, user.password);

		// if password incorrect return error
		if (!passwordMatched) {
			throw new AppError('Incorrect email/password combination.', 401);
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: user.id,
			expiresIn,
		});

		return {
			user,
			token,
		};
	}
}

export default AuthenticateUserService;
