import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState( [] );

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      project_name: `Midnight Sun ${Date.now()}`,
    });

    const newProject = response.data;

    setProjects( [...projects, newProject] );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="red" />

      <SafeAreaView style={styles.container}>
        <FlatList
          // array data
          data={projects}
          // id first element
          keyExtractor={project => project.id}
          // return my element like .map()
          renderItem={({ item: project }) => (
            <Text style={styles.title}>{project.project_name}</Text>
          )}
        />

        <TouchableOpacity
          onPress={handleAddProject}
          activeOpacity={0.6}
          style={styles.buttonProject}
        >

          <Text style={styles.buttonProjectText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  title: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonProject: {
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonProjectText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "#fff",
    letterSpacing: 2
  },
});