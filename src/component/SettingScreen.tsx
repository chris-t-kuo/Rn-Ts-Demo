import React from 'react';
import { View, Text, Button } from 'react-native';
import Base from '../style/base';
import { Navigation } from 'react-native-navigation';

const SettingScreen = (props: any) => {

    const handlePress = () => {
        Navigation.pop(props.componentId);
    }

    return (
        <View style={Base.root}>
            <Text>Settings Screen</Text>
            <Button onPress={handlePress} title="Go Back" />
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