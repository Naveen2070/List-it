import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const handlepress = () => {
    window.alert('hi');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: 'red', fontSize: 20 }}>HI Stranger</Text>
      </View>
      <Text>Hello World</Text>
      <Button title="Click Me" onPress={handlepress} />
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
});
