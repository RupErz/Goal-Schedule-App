import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Alert, Modal } from 'react-native'

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enteredText) => {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    // This is not overwrite, we use this to pass 'enteredGoalText' into Parent component.
    const addGoalHandler = () => {
        if (enteredGoalText.trim().length === 0) {
            Alert.alert('Invalid Input', 'Course goal cannot be empty', [{text: 'Okay'}]);
        } else {
            props.addGoalHandler(enteredGoalText);
            setEnteredGoalText(''); // Clear the input field after adding the goal.
        }
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style = {styles.inputContainer}>
                <TextInput 
                    style = {styles.texInput}
                    placeholder='Your Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button 
                    title = 'Add Goal'
                    onPress={addGoalHandler}
                />
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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
});