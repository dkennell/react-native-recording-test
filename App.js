import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  function recordAudio(){
    console.log('asdf')
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.button}>
        <Button
          title="Start Recording"
          onPress={recordAudio}
        />
      </View>
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
  button: {
    marginVertical: 20,
  }
});
