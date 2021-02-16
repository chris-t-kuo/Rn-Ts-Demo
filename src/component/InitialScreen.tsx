import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Base from '../style/base';
import localstorage from '../storage';
import { goHome, goToAuth } from '../navigation/index';

const InitialScreen = () => {

    useEffect(() => {

        localstorage.set('CUSTOMERNUMBER', '1234567');
        //localstorage.delete('CUSTOMERNUMBER');

        const init = async () => {

            try {
                await localstorage.get('CUSTOMERNUMBER').then(customerNumber => {
                    if (customerNumber) {
                        goHome();
                    } else {
                        goToAuth();
                    }
                });
            } catch (err) {
                goToAuth();
            }

        }
        init();
    }, []);

    return (
        <View style={Base.container}>
            <Text style={Base.welcome}>Loading</Text>
        </View>
    )
}

export default InitialScreen;