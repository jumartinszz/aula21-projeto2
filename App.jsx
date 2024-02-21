import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

const alunos = [
  {
    name: "Julia",
    course: "DS",
    bio: "Estudante senai",
    picture: require("./assets/fotojulia.png"),
  },
  {
    name: "Martins",
    course: "DS1",
    bio: "Estudante senai-sp",
    picture: require("./assets/fotojulia.png"),
  },
]

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard listaAlunos={alunos}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
