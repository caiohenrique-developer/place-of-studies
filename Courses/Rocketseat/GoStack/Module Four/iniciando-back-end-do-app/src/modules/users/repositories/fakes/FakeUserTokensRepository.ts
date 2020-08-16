import { uuid } from 'uuidv4';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';

// This guy is responsable to manager all process
// of my User route, as create, delete, list, edit.
class FakeUserTokensRepository implements IUserTokensRepository {
	private userTokens: UserToken[] = [];

	public async generate(user_id: string): Promise<UserToken> {
		const userToken = new UserToken();

		Object.assign(userToken, { id: uuid(), token: uuid(), user_id });

		this.userTokens.push(userToken);

		return userToken;
	}
}

export default FakeUserTokensRepository;
