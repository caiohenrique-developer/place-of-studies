"use strict";

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _ShowProfileService = _interopRequireDefault(require("./ShowProfileService"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let showProfile;
describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    showProfile = new _ShowProfileService.default(fakeUsersRepository);
  });
  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123123'
    });
    const profile = await showProfile.execute({
      user_id: user.id
    });
    await expect(profile.name).toBe('John Doe');
    await expect(profile.email).toBe('johndoe@gmail.com');
  });
  it('should not be able to show the profile from nonexistent user', async () => {
    await expect(showProfile.execute({
      user_id: 'non-existent-user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});