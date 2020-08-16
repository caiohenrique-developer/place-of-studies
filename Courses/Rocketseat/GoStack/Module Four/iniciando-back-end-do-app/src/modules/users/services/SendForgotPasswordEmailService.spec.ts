import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';
// import AppError from '@shared/errors/AppError';

describe('SendForgotPasswordEmail', () => {
	it('should be able to recover the password using your email', async () => {
		const fakeUsersRepository = new FakeUsersRepository();
		const fakeMailProvider = new FakeMailProvider();

		const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

		const sendForgotPasswordEmail = new SendForgotPasswordEmailService(
			fakeUsersRepository,
			fakeMailProvider,
		);

		await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123123',
		});

		await sendForgotPasswordEmail.execute({
			email: 'johndoe@gmail.com',
		});

		expect(sendMail).toHaveBeenCalled();
	});
});
