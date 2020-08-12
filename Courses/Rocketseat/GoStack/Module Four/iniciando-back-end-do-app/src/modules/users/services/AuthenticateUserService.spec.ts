import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';

describe('AuthenticateUser', () => {
	it('should be able to authenticate', async () => {
		const fakeUsersRepository = new FakeUsersRepository();
		const fakeHashProvider = new FakeHashProvider();
		const createUser = new CreateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);
		const authenticateUser = new AuthenticateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);

		const user = await createUser.execute({
			name: 'John Doe',
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		const response = await authenticateUser.execute({
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		expect(response).toHaveProperty('token');
		expect(response.user).toEqual(user);
	});

	it('should not be able to authenticate with a nonexistent user', async () => {
		const fakeUsersRepository = new FakeUsersRepository();
		const fakeHashProvider = new FakeHashProvider();
		const authenticateUser = new AuthenticateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);

		expect(
			authenticateUser.execute({
				email: 'johnjoe@gmail.com',
				password: '123123',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to authenticate with a wrong password', async () => {
		const fakeUsersRepository = new FakeUsersRepository();
		const fakeHashProvider = new FakeHashProvider();
		const createUser = new CreateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);
		const authenticateUser = new AuthenticateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);

		await createUser.execute({
			name: 'John Doe',
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		expect(
			authenticateUser.execute({
				email: 'johnjoe@gmail.com',
				password: 'wrong-password',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
