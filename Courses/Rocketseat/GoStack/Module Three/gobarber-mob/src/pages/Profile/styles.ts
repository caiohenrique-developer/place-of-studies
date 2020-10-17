import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 30 : 40}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  margin-top: 50px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 186px;
  height: 186px;
  align-self: center;
  margin-top: -32px;
`;

export const UserAvatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 186px;
`;

export const LogOutButton = styled.TouchableOpacity`
  position: absolute;
  top: 53px;
  right: 0;
  width: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;
