import React from 'react'
import {Text, Pressable} from 'react-native'


export const Button = ({ onPress = () => { }, children = "" }) => {

    return
    <Pressable onPress={onPress}>
        <Text>
            {children}
        </Text>
    </Pressable>
}