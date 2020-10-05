import React, { useCallback, useRef } from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer, AvatarInput } from './styles';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { user } = useAuth();

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório!'),
          email: Yup.string()
            .required('E-mail é obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(6, 'Senha deve ter no mínimo 6 dígitos!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        await api.post('/users', { name, email, password });

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon no GoBarber.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          console.error(error);

          formRef.current?.setErrors(getValidationErrors(error));

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro!',
          description:
            'Ocorreu um erro ao fazer seu cadastro, tente novamente.',
        });
      }
    },
    [addToast, history]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <AvatarInput>
              <img src={user.avatar_url} alt={user.name} />
              <button type="button">
                <FiCamera />
              </button>
            </AvatarInput>

            <h1>Meu perfil</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />

            <Input
              icon={FiLock}
              name="old_password"
              type="password"
              placeholder="Senha atual"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Nova senha"
            />
            <Input
              icon={FiLock}
              name="password_confirmation"
              type="password"
              placeholder="Confirmar senha"
            />

            <Button type="submit">Confirmar mudanças</Button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Profile;
