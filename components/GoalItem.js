import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ( props ) => { // ({props}) : mean u destructuring and the props 'must' match . 
    return (
        <Pressable onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goalItem}> 
                <Text style= {styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8, // Space between elements
        padding: 8, // Inner space within box
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
    goalText : {
        color: 'white',
    }
})