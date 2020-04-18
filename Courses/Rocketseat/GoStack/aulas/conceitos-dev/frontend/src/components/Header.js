import React from 'react';

export default function Header({ title, name, children }) {
  console.log(title, name);
  
  return (
    <header>
      <h1>{title}, {name}</h1>

      {children}
    </header>
  );
}