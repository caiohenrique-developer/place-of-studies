import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/modelo-cafe-da-tarde.jpg';

function App() {
  const [ projects, setProjects ] = useState( ['Dev web', 'Dev mob'] );

  function handleAddProject() {
    setProjects( [...projects, `Novo projeto ${Date.now()}`] );
  }

  return (
    <>
      <Header title="Home" />

      <img src={backgroundImage} width={200} />
        
      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>

      <ul>
        {
          projects.map(project => {
            return (
              <li key={project}>{project}</li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;