import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Alert, Modal, Image } from 'react-native'

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
                <Image 
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput 
                    style = {styles.texInput}
                    placeholder='Your Course Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />

                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button 
                            title= 'Cancel'
                            onPress={props.onCancel}
                            color={"#f31282"}     
                        />
                    </View>     
                    <View style = {styles.button}>
                        <Button 
                            title = 'Add Goal'
                            onPress={addGoalHandler}
                            color={"#b180f0"}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer : {
        justifyContent: 'center', // How the elements are distributed in the row or column
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#311b6b',
    },
    texInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 12,
        backgroundColor: '#e4d0ff',
        width: '100%', // Take 70% of the available width
        padding: 16,
        color: '#120438',

    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});