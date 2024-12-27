import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText]); // Spread operator, create a new array .
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]); // This is the correct way to update the state when the new state depends on the old state.
  };

  const deleteGoalHandler = (id) => {
    console.log('DELETE');
    setCourseGoals((currentCourseGoals) => {
      // filter() , act like map but it return a new array with the elements that pass the condition.
      return currentCourseGoals.filter((goal) => {
        return goal.id !== id;
      })
    })
  };
  return (
    <View style = {styles.appContainer}>
        {/* Input area for user to submit */}
        <GoalInput addGoalHandler={addGoalHandler}/>

        {/* List of Goals are rendered */}
        <View style = {styles.goalsContainer}>
          <FlatList
            data = {courseGoals}
            renderItem={(itemData) => { // a fcn tell FlatList how to render the items.
              // itemData: an object created by FlatList, contains the item being rendered.
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  onDelete={deleteGoalHandler}
                  id={itemData.item.id}
                />
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
  goalsContainer: {
    flex: 5,
  },
});