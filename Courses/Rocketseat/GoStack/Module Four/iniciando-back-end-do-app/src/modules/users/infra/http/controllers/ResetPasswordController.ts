import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { password, token } = request.body;

		// create a instance with my service
		const resetPassword = container.resolve(ResetPasswordService);

		// return a response of the method execute of my service
		await resetPassword.execute({ password, token });

		return response.status(204).json();
	}
}
