import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
	try {
		const { email, password } = request.body;

		// create a instance with my service
		const authenticateUser = new AuthenticateUserService();

		// return a response of the method execute of my service
		const { user, token } = await authenticateUser.execute({ email, password });

		// delete password visibility on frontend
		delete user.password;

		return response.json({ user, token });
	} catch (err) {
		return response.status(err.statusCode).json({ error: err.message });
	}
});

export default sessionsRouter;
