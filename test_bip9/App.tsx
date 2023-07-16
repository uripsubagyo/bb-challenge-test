import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/pages/LandingPage';
import OTPPage from './src/pages/OTPPage';
import PINPage from './src/pages/PINPage';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={LandingPage} options={{headerShown: false}}/>
            <Stack.Screen name='OTP' component={OTPPage} options={{headerShown: false}}/>
            <Stack.Screen name='PIN' component={PINPage}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
