import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-native-flex-grid';

const SKILLS = ["Frontend", "Backend", "Mobile", "Databases"];
const MIN = 0;
const MAX = 5;

export default function App() {

  const [value, setValue ] = useState(0);
  const [values, setValues] = useState(new Array(SKILLS.length).fill(0));
  const [average, setAverage] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Value: {value}</Text>
    <Slider
      style={{width: 200, height: 40}}
      minimumValue={0}
      maximumValue={10}
      step={1}
      value={value}
      minimumTrackTintColor="#e60d0d"
      maximumTrackTintColor="#9c17da"
      onValueChange={(val) => setValue(val)}
    />
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
