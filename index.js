import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/component/HomeScreen';
import SettingScreen from './src/component/SettingScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Setting', () => SettingScreen);

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
    },
    topBar: {
        title: {
            color: 'white'
        },
        backButton: {
            color: 'white'
        },
        background: {
            color: '#4d089a'
        }
    }
})

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home'
                        }
                    }
                ]
            }
        }
    });
});