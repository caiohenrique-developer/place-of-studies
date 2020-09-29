import React, { useState } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/b76931d9e129fc41e96e-25014595_133014260675127_2622536868075405312_n.jpg"
                alt="Caio Henrique"
              />

              <strong>Caio Henrique</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/b76931d9e129fc41e96e-25014595_133014260675127_2622536868075405312_n.jpg"
                  alt="Caio Henrique"
                />

                <strong>Caio Henrique</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/b76931d9e129fc41e96e-25014595_133014260675127_2622536868075405312_n.jpg"
                  alt="Caio Henrique"
                />

                <strong>Caio Henrique</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock /> 08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/b76931d9e129fc41e96e-25014595_133014260675127_2622536868075405312_n.jpg"
                  alt="Caio Henrique"
                />

                <strong>Caio Henrique</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
