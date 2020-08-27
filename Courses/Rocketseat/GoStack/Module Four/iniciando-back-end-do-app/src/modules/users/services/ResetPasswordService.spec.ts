import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '@modules/users/repositories/fakes/FakeUserTokensRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import ResetPasswordService from '@modules/users/services/ResetPasswordService';
import AppError from '@shared/errors/AppError';
// import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let fakeHashProvider: FakeHashProvider;
let resetPassword: ResetPasswordService;

describe('ResetPasswordEmail', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		fakeUserTokensRepository = new FakeUserTokensRepository();
		fakeHashProvider = new FakeHashProvider();

		resetPassword = new ResetPasswordService(
			fakeUsersRepository,
			fakeUserTokensRepository,
			fakeHashProvider,
		);
	});

	it('should be able to reset the password', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123456',
		});

		const { token } = await fakeUserTokensRepository.generate(user.id);

		const generateHash = jest.spyOn(fakeHashProvider, 'generateHash');

		await resetPassword.execute({
			password: '123123',
			token,
		});

		const updatedUser = await fakeUsersRepository.findById(user.id);

		expect(generateHash).toHaveBeenCalledWith('123123');
		expect(updatedUser?.password).toBe('123123');
	});

	it('should not be able to reset the password with non-existent token', async () => {
		await expect(
			resetPassword.execute({
				token: 'non-existent-token',
				password: '123456',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to reset the password with non-existent user', async () => {
		const { token } = await fakeUserTokensRepository.generate(
			'non-existent-user',
		);

		await expect(
			resetPassword.execute({
				token,
				password: '123456',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to reset the password after two hours have passed', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123456',
		});

		const { token } = await fakeUserTokensRepository.generate(user.id);

		jest.spyOn(Date, 'now').mockImplementationOnce(() => {
			const customTime = new Date();

			return customTime.setHours(customTime.getHours() + 3);
		});

		await expect(
			resetPassword.execute({
				password: '123123',
				token,
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
