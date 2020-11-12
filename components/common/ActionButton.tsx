import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'


const ActionButton = (props: PropsType) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.actionText]}>
                    {props.icon && <MaterialIcons name={props.icon} style={styles.icon}/>}
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButton

const styles = StyleSheet.create({
    icon: {
        textAlignVertical: 'center',
        fontSize: 20,
        paddingRight: 10,
        lineHeight: 1,
    },
    actionText: {
        backgroundColor: '#256738',
        color: '#fff',
        padding: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'MontserratMedium',
        fontSize: 12,
        marginBottom: 10,
        borderRadius: 7
    }
})

// TYPES
type PropsType = {
    onPress: () => void
    text: string,
    icon?: string
}