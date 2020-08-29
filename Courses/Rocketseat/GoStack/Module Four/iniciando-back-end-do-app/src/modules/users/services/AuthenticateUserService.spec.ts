import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import CreateUserService from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		fakeHashProvider = new FakeHashProvider();
		createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
		authenticateUser = new AuthenticateUserService(
			fakeUsersRepository,
			fakeHashProvider,
		);
	});

	it('should be able to authenticate', async () => {
		const user = await createUser.execute({
			name: 'John Doe',
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		const response = await authenticateUser.execute({
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		await expect(response).toHaveProperty('token');
		await expect(response.user).toEqual(user);
	});

	it('should not be able to authenticate with a nonexistent user', async () => {
		await expect(
			authenticateUser.execute({
				email: 'johnjoe@gmail.com',
				password: '123123',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to authenticate with a wrong password', async () => {
		await createUser.execute({
			name: 'John Doe',
			email: 'johnjoe@gmail.com',
			password: '123123',
		});

		await expect(
			authenticateUser.execute({
				email: 'johnjoe@gmail.com',
				password: 'wrong-password',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
