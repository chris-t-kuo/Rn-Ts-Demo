import React from 'react';
import { View, Text } from 'react-native';
import Base from '../style/base';

const SettingScreen = (props: any) => {
    console.log(props)
    return (
        <View style={Base.root}>
            <Text>Settings Screen</Text>
        </View>
    );
};

SettingScreen.options = {
    topBar: {
        title: {
            text: 'Setting',
        }
    }
}


export default SettingScreen;