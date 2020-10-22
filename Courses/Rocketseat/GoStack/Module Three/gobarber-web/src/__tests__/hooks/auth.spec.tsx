import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';

describe('Auth Hook', () => {
  it('should be able to sign-in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@example.com',
      password: '123123',
    });

    expect(result.current.user.email).toEqual('johndoe@example.com');
  });
});
