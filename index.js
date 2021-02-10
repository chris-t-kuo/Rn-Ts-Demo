import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/index';
import screen from './src/constant/index';

registerScreens();

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
                            name: screen.initial,
                            options: {

                            }
                        }
                    }
                ]
            }
        }
    });
});