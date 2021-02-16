import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Base from '../style/base';
import screen from '../constant/index';

const HomeScreen = (props: any) => {
    return (
        <View style={Base.root}>
            <Text>Home Screen</Text>
            <Button
                title='Push Setting Screen'
                color='red'
                onPress={() => Navigation.push(props.componentId, {
                    component: {
                        name: screen.setting,
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