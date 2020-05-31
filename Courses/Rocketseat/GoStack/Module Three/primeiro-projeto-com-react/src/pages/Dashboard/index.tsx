import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars0.githubusercontent.com/u/38739837?s=460&u=2d996391ae1dfacda373323b6c56fbbe33cefc7c&v=4"
            alt="Profile"
          />

          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! 🚀</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
