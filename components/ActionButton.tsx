import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../styles/global';


const ActionButton = (props: PropsType) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[globalStyles.actionText]}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButton

// TYPES
type PropsType = {
    onPress: () => void
    text: string
}
