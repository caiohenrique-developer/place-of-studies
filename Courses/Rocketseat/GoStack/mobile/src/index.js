import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
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
});