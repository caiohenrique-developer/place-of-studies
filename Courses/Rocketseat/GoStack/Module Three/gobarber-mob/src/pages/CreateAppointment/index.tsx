import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendar,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface RouteParams {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { user } = useAuth();
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const [selectedProvider, setSelectedProvider] = useState(
    routeParams.providerId,
  );
  const { goBack } = useNavigation();

  useEffect(() => {
    api.get('providers').then(response => {
      setProviders(response.data);
    });
  }, []);

  const goToBackPage = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleSelectProvider = useCallback((providerId: string) => {
    setSelectedProvider(providerId);
  }, []);

  const handleOpenDatePicker = useCallback(() => {
    setShowDatePicker(true);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={goToBackPage}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>

      <ProvidersListContainer>
        <ProvidersList
          data={providers}
          keyExtractor={provider => provider.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: provider }) => (
            <ProviderContainer
              onPress={() => handleSelectProvider(provider.id)}
              selected={provider.id === selectedProvider}
            >
              <ProviderAvatar source={{ uri: provider.avatar_url }} />
              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>

      <Calendar>
        <Title>Escolha uma data</Title>

        <OpenDatePickerButton onPress={handleOpenDatePicker}>
          <OpenDatePickerButtonText>
            Selecione outra data
          </OpenDatePickerButtonText>
        </OpenDatePickerButton>

        {showDatePicker && (
          <DateTimePicker mode="date" display="calendar" value={new Date()} />
        )}
      </Calendar>
    </Container>
  );
};

export default CreateAppointment;
