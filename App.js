import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInput = text => {
    setGoalText(text);
  };

  const addGoal = () => {
    if (goalText.trim() !== '') {
      setGoals(currentGoals => [...currentGoals, goalText]);
      setGoalText('');
    }
  };

  const deleteGoal = index => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Your Goals</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInput}
          value={goalText}
          style={styles.textInput}
          placeholder="Type your goal"
        />
        <Button onPress={addGoal} title="Add Goal" color="#007bff" />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.goalContainer}>
          {goals.map((goal, i) => (
            <View key={i} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
              <TouchableOpacity onPress={() => deleteGoal(i)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appBar: {
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  appBarText: {
    color: '#fff',
    fontSize: 24,
    paddingTop:20,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  goalContainer: {
    flex: 1,
    padding: 20,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  goalText: {
    width: '80%',
    fontSize: 16,
    padding: 7,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: 'white'

  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 19,
  },


});

export default App;
