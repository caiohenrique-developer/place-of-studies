import React, { useCallback } from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logotipo GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
