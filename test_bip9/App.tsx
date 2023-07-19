import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/pages/LandingPage';
import OTPPage from './src/pages/OTPPage';
import PINPage from './src/pages/PINPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {SafeAreaProvider,} from 'react-native-safe-area-context';
import { RootStackParamList } from './src/navigation/root';



// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                  <Stack.Screen name='Home' component={LandingPage} options={{headerShown: false}} />
                  <Stack.Screen name='OTP' component={OTPPage} options={{headerShown: false}} />
                  <Stack.Screen name='PIN' component={PINPage} options={{headerShown: false}}/>
                </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}
