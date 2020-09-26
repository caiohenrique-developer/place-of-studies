import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { avatar_url, name } = user;

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Logotipo GoBarber" />

          <Profile>
            <img src={avatar_url} alt={name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
