import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

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
			throw new Error('Incorrect email/password combination.');
		}

		// compare password received with the password crypted on database
		const passwordMatched = await compare(password, user.password);

		// if password incorrect return error
		if (!passwordMatched) {
			throw new Error('Incorrect email/password combination.');
		}

		const token = sign({}, '52895c103247788f2e0af8eaaa14c7c7', {
			subject: user.id,
			expiresIn: '1d',
		});

		return {
			user,
			token,
		};
	}
}

export default AuthenticateUserService;
