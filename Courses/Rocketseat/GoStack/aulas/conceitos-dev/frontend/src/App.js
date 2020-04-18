import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Home" name="Menu do Header">
        <ul>
          <li>Home</li>
          <li>Categoria</li>
          <li>Produto</li>
        </ul>
      </Header>

      <Header title="Institucional">
        <ul>
          <li>Home</li>
          <li>Categoria</li>
          <li>Produto</li>
          <li>Checkout</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;