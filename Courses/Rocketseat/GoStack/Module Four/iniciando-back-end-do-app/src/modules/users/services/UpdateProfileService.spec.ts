import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		fakeHashProvider = new FakeHashProvider();

		updateProfile = new UpdateProfileService(
			fakeUsersRepository,
			fakeHashProvider,
		);
	});

	it('should be able to update the profile', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123123',
		});

		const updatedUser = await updateProfile.execute({
			user_id: user.id,
			name: 'John Three',
			email: 'john@three.com',
		});

		await expect(updatedUser.name).toBe('John Three');
		await expect(updatedUser.email).toBe('john@three.com');
	});

	it('should not be able to update to another existing user email', async () => {
		await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123123',
		});

		const user = await fakeUsersRepository.create({
			name: 'Test',
			email: 'test@example.com',
			password: '123123',
		});

		await expect(
			updateProfile.execute({
				user_id: user.id,
				name: 'John Doe',
				email: 'johndoe@gmail.com',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should be able to update the password', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123456',
		});

		const updatedUser = await updateProfile.execute({
			user_id: user.id,
			name: 'John Three',
			email: 'john@three.com',
			old_password: '123456',
			password: '123123',
		});

		await expect(updatedUser.password).toBe('123123');
	});

	it('should not be able to update the password without old password', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123456',
		});

		await expect(
			updateProfile.execute({
				user_id: user.id,
				name: 'John Three',
				email: 'john@three.com',
				password: '123123',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('should not be able to update the password with the wrong old password', async () => {
		const user = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123456',
		});

		await expect(
			updateProfile.execute({
				user_id: user.id,
				name: 'John Three',
				email: 'john@three.com',
				old_password: 'wrong-old-password',
				password: '123123',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
