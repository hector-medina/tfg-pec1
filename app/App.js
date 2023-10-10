import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>PEC 1</Text>
      <Text style={styles.subTitleText}>Héctor Medina</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'blue',
  },
  subTitleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'gray',
  }
});
