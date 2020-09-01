import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import AppError from '@shared/errors/AppError';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();

		listProviders = new ListProvidersService(fakeUsersRepository);
	});

	it('should be able to list the providers', async () => {
		const user1 = await fakeUsersRepository.create({
			name: 'John Doe',
			email: 'johndoe@gmail.com',
			password: '123123',
		});

		const user2 = await fakeUsersRepository.create({
			name: 'John Trê',
			email: 'johntre@gmail.com',
			password: '123123',
		});

		const loggedUser = await fakeUsersRepository.create({
			name: 'John Qua',
			email: 'johnqua@gmail.com',
			password: '123123',
		});

		const providers = await listProviders.execute({
			user_id: loggedUser.id,
		});

		await expect(providers).toEqual([user1, user2]);
	});
});
