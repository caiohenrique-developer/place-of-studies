import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import authConfig from '@config/auth';

interface IRequestDTO {
	email: string;
	password: string;
}

interface IResponse {
	user: User;
	token: string;
}

@injectable()
class AuthenticateUserService {
	constructor(
		@inject('UsersRepository') private usersRepository: IUsersRepository,
	) {}

	public async execute({ email, password }: IRequestDTO): Promise<IResponse> {
		// verify if email received exist on database
		const user = await this.usersRepository.findByEmail(email);

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
