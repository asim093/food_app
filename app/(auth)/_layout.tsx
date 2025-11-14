import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {Slot} from "expo-router";

const _Layout = () => {
    return (
        <SafeAreaView>
            <Text>_Layout</Text>
            <Slot />
        </SafeAreaView>
    )
}
export default _Layout
