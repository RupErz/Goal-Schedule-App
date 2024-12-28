import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ( props ) => { // ({props}) : mean u destructuring and the props 'must' match . 
    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={props.onDelete.bind(this, props.id)} 
                android_ripple={{color: '#210644'}}
                style = {({pressed}) => ( // a fcn will be called automatically whenever the pressed state is changed.
                    pressed && styles.pressedItem
                )}
            > 
                <Text style= {styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>    
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8, // Space between elements
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
    goalText : {
        padding: 8, // Inner space within box
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    }
})