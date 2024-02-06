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

  useEffect(() => {
    calculateAverageSkill(); 
  }, [values]);

  const items = [];
  for (let i = 0; i < SKILLS.length; i++) {
    items.push(
      <View key={"item" + i} style={styles.skills}>
        <Text style={styles.skill}>{SKILLS[i]}</Text>
        <Text style={styles.value}>Skill: {values[i]}</Text>
        <Container fluid>
          <Row>
            <Col><Text style={styles.min}>{MIN}</Text></Col>
            <Col xs="9">
              <Slider
                minimumValue={MIN}
                maximumValue={MAX}
                step={1}
                value={values[i]}
                minimumTrackTintColor="#006666"
                maximumTrackTintColor="#ff9900"
                onValueChange={(val) => setSkillValue(val, i)}/>
            </Col>
            <Col><Text>{MAX}</Text></Col>
          </Row>
        </Container>
      </View>
    );
  }

  const setSkillValue = (val, i) => {
    let skillValues = [...values];
    skillValues[i] = val;
    setValues(skillValues);
  }

  const calculateAverageSkill = () => {
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = (sum / values.length) || 0;
    setAverage(avg);
  }

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
    justifyContent: 'center',
    marginTop: 40,
  },
  header: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  skills: {
    alignItems: 'center',
  },
  skill: {
    marginTop: 30,
    fontSize: 25
  },
  min: {
    marginLeft: 10
  },
  value: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20
  },
  averageHeader: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
  },
  averageValue: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 40,
  }

});
