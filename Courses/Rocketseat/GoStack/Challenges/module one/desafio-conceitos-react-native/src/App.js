import React, { useState, useEffect } from "react";
import api from './services/api';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const [repositories, setRepositories] = useState([]);
  
  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(response.data);
      setRepositories(response.data);
    });
  }, []);

  // add like to repository
  async function handleLikeRepository(id) {
    const response = await api.post(`repositories/${id}/like`);

    const likedRepository = response.data;

    const repositoriesUpdated = repositories.map(repository => {
      if(repository.id === id) {
        return likedRepository;
      } else {
        return repository;
      }
    });

    setRepositories( repositoriesUpdated );
  }

  // remove like of the repository
  async function handleDislikeRepository(id) {
    const response = await api.post(`repositories/${id}/dislike`);
    
    const likedRepository = response.data;

    const repositoriesUpdated = repositories.map(repository => {
      if(repository.id === id) {
        return likedRepository;
      } else {
        return repository;
      }
    });

    setRepositories( repositoriesUpdated );
  }

  // remove the repository
  async function removeRepository(id) {
    await api.delete(`repositories/${id}`);

    const myRepositories = repositories.filter(repository => {
      return repository.id !== id;
    });

    setRepositories(myRepositories);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>

        <FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item: repository }) => (
            <View style={styles.repositoryContainer}>
              <TouchableOpacity
                style={styles.close}
                onPress={() => removeRepository(repository.id)}
              >
                <FontAwesome5 style={styles.closeIcon} name={'times-circle'} />

              </TouchableOpacity>

              <Text style={styles.repository}>{repository.title}</Text>

              <View style={styles.techsContainer}>
                {repository.techs.map(tech => (
                  <Text key={tech} style={styles.tech}>
                    {tech}
                  </Text>
                ))}
              </View>

              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes} curtida{repository.likes > 1 ? 's' : ''}
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleLikeRepository(repository.id)}
                  testID={`like-button-${repository.id}`}
                  >
                  <Text style={styles.buttonText}>Curtir</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleDislikeRepository(repository.id)}
                  >
                  <Text style={[styles.buttonText, styles.dislike]}>Descurtir</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
  repositoryContainer: {
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
  },
  repository: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    borderRadius: 4,
    padding: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    backgroundColor: "#7159c1",
  },
  dislike: {
    backgroundColor: 'red',
  },
  close: {
    borderRadius: 50,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeIcon: {
    backgroundColor: '#f2f2f2',
    color: '#fff',
    borderRadius: 50,
    padding: 4,
    fontSize: 22,
  },
});