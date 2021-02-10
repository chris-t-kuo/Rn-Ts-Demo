import { Navigation } from 'react-native-navigation';
import screen from '../constant/index';
import HomeScreen from '../component/HomeScreen';
import SettingScreen from '../component/SettingScreen';
import InitialScreen from '../component/InitialScreen';
import SignInScreen from '../component/SignInScreen';
import SignUpScreen from '../component/SignUpScreen';

const registerScreens = () => {
    Navigation.registerComponent(screen.home, () => HomeScreen);
    Navigation.registerComponent(screen.setting, () => SettingScreen);
    Navigation.registerComponent(screen.initial, () => InitialScreen);
    Navigation.registerComponent(screen.signin, () => SignInScreen);
    Navigation.registerComponent(screen.signup, () => SignUpScreen);
}

export default registerScreens;