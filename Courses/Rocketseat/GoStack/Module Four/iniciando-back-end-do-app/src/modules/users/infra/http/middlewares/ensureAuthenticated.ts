import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

interface ITokenPayload {
	iat: number;
	exp: number;
	sub: string;
}

export default function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
): void {
	// get request values of the headers
	const authHeader = request.headers.authorization;

	// verify if the headers exists
	if (!authHeader) {
		throw new AppError('JWT token is missing.', 401);
	}

	// disrupt the token value
	const [, token] = authHeader.split(' ');

	// get the value key secret of the jwt object that i made in another file
	const { secret } = authConfig.jwt;

	try {
		// verify if token that i got is equal the key registered
		const decoded = verify(token, secret);

		// subject, whom the token refers to
		const { sub } = decoded as ITokenPayload;

		// user identification
		request.user = {
			id: sub,
		};

		return next();
	} catch {
		throw new AppError('Invalid JWT token!', 401);
	}
}
