import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';
import './App.css';
import backgroundImage from './assets/modelo-cafe-da-tarde.jpg';

function App() {
  // change value of component
  const [ projects, setProjects ] = useState( [] );

  // connection whit backend
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log(response.data);
    });
  }, []);

  // add value to component
  function handleAddProject() {
    setProjects( [...projects, `Novo projeto ${Date.now()}`] );
  }

  // return html with contents
  return (
    <>
      <Header title="Home" />

      <img src={backgroundImage} width={200} />
        
      {/* <button type="button" onClick={handleAddProject}>Adicionar Projeto</button> */}

      <ul>
        {
          // traverses the object and returns a html
          projects.map(project => {
            return (
              <li key={project.id}>{project.project_name}</li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;