import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../styles/global';


export default function ActionButton(props: PropsType) {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[globalStyles.actionText]}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}


// TYPES
type PropsType = {
    onPress: () => void
    text: string
}
