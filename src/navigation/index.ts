import { Navigation } from 'react-native-navigation';
import screen from '../constant/index';

const goHome = () => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'Home',
                children: [
                    {
                        component: {
                            name: screen.home
                        }
                    }
                ]
            }
        }
    });
}

const goToAuth = () => {
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: 'Auth',
                children: [
                    {
                        component: {
                            name: screen.signin,
                            options: {
                                bottomTab: {
                                    fontSize: 12,
                                    text: 'Sign In',
                                    icon: require('../asset/signin.png')
                                }
                            }
                        }
                    },
                    {
                        component: {
                            name: screen.signup,
                            options: {
                                bottomTab: {
                                    text: 'Sign Up',
                                    fontSize: 12,
                                    icon: require('../asset/signup.png')
                                }
                            }
                        }
                    }
                ]
            }
        }
    });
}

export { goHome, goToAuth }

