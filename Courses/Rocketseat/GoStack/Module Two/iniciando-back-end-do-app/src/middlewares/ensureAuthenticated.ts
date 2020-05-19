import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayload {
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
		throw new Error('JWT token is missing.');
	}

	// disrupt the token value
	const [, token] = authHeader.split(' ');

	// get the value key secret of the jwt object that i made in another file
	const { secret } = authConfig.jwt;

	try {
		// verify if token that i got is equal the key registered
		const decoded = verify(token, secret);

		// subject, whom the token refers to
		const { sub } = decoded as TokenPayload;

		// user identification
		request.user = {
			id: sub,
		};

		return next();
	} catch {
		throw new Error('Invalid JWT token!');
	}
}
