import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
	public async create(request: Request, response: Response): Promise<Response> {
		const { email } = request.body;

		// create a instance with my service
		const sendForgotPassword = container.resolve(
			SendForgotPasswordEmailService,
		);

		// return a response of the method execute of my service
		await sendForgotPassword.execute({ email });

		return response.status(204).json();
	}
}
