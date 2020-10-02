import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { isToday, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
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
import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const { signOut, user } = useAuth();
  const { avatar_url, name } = user;

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) setSelectedDate(day);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    api
      .get('/appointments/me', {
        params: {
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
        },
      })
      .then((response) => {
        console.log(response.data);
        setAppointments(response.data);
      });
  }, [selectedDate]);

  const disableDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDayAsText = useMemo(() => {
    return format(selectedDate, "dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

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
            {isToday(selectedDate) && <span>hoje</span>}
            <span>{selectedDayAsText}</span>
            <span>{selectedWeekDay ? `${selectedWeekDay}-feira` : ''}</span>
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

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            // fromMonth={new Date()} // disable the past arrow date
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disableDays]}
            selectedDays={selectedDate}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            onMonthChange={handleMonthChange}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
