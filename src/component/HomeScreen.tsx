import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Base from '../style/base';

const HomeScreen = (props: any) => {

    console.log(props)
    return (
        <View style={Base.root}>
            <Text>Home Screen</Text>
            <Button
                title='Push Setting Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: 'Setting',
                        options: {
                            topBar: {
                                title: {
                                    text: 'Setting'
                                }
                            }
                        }
                    }
                })} />
        </View>
    );
};

HomeScreen.options = {
    topBar: {
        title: {
            text: 'Home',
        }
    }
}

export default HomeScreen;