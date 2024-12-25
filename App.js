import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // const [text, onChangeText] = useState('Hello');
  return (
    <View style = {styles.appContainer}>
        {/* Input area for user to submit */}
        <View style = {styles.inputContainer}>
          <TextInput 
            style = {styles.texInput}
            placeholder='Your Course Goal'
          />
          <Button 
            title = 'Add Goal'
          />
        </View>

        {/* List of Goals are rendered */}
        <View style = {styles.goalsContainer}>
          <Text>List of Goals...</Text>
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
    marginBottom: 80,
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
  }
  
});