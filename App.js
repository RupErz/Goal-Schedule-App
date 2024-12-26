import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText]); // Spread operator, create a new array .
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, key: Math.random().toString()}]); // This is the correct way to update the state when the new state depends on the old state.
  };
  return (
    <View style = {styles.appContainer}>
        {/* Input area for user to submit */}
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.texInput}
            placeholder='Your Course Goal'
            onChangeText={goalInputHandler}
          />
          <Button 
            title = 'Add Goal'
            onPress={addGoalHandler}
          />
        </View>

        {/* List of Goals are rendered */}
        <View style = {styles.goalsContainer}>
          <FlatList
            data = {courseGoals}
            renderItem={(itemData) => { // a fcn tell FlatList how to render the items.
              // itemData: an object created by FlatList, contains the item being rendered.
              return (
                <View style={styles.goalItem}> 
                  <Text style= {styles.goalText}>{itemData.item.text}</Text>
                </View>
              );
            }} 
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1, // Allow the outer container to take full height since it's the only container right now.

  },
  inputContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between', // How the elements are distributed in the row or column
    alignItems: 'center',
    marginBottom: 24 ,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flex: 1,
  },
  texInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '70%', // Take 70% of the available width
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8, // Space between elements
    padding: 8, // Inner space within box
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText : {
    color: 'white',
  }
  
});