import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import {globalStyles} from '../../styles/global'


const ActionButton = (props: PropsType) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[globalStyles.actionText]}>
                    {props.icon && <MaterialIcons name={props.icon} style={styles.icon}/>}
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(ActionButton)

const styles = StyleSheet.create({
    icon: {
        textAlignVertical: 'center',
        fontSize: 20,
        paddingRight: 10,
        lineHeight: 1,
    },
})

// TYPES
type PropsType = {
    onPress: () => void
    text: string,
    icon?: string
}
