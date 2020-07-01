import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState( [] );

  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(response.data);
      setRepositories(response.data);
    });
  }, []);

  // add a new repository
  async function handleAddRepository() {
    const searchbar = document.getElementById('addInput');
    
    const response = await api.post('repositories', {
      title: `${searchbar.value}`,
      url: "https://github.com/cdvlopr",
      techs: ["Sass", "Node.js", "React"],
    });
  
    searchbar.value = '';

    const newrepository = response.data;

    setRepositories( [...repositories, newrepository] );
  }

  // remove repository
  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const response = repositories.filter(repository => {
      return repository.id !== id;
    });

    setRepositories(response);
  }

  return (
    <>
      <label>Cadastrar Repositório:</label>
      <div className="input-center">
        <input
          type="text"
          required
          id="addInput"
          placeholder="Please, type something!"
          />

        <button onClick={handleAddRepository}>Adicionar</button>
      </div>

      <ul data-testid="repository-list">
        {
          repositories.map(repository => (
              <li key={repository.id}>
                {repository.title}

                <button onClick={() => handleRemoveRepository(repository.id)}>
                  Remover
                </button>
              </li>
            )
          )
        }
      </ul>
    </>
  );
}

export default App;