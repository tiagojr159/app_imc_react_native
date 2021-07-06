import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Title from "./src/components/";
import Form from "./src/Form/";

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
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
