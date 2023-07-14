import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/pages/LandingPage';
import OTPPage from './src/pages/OTPPage';
import PINPage from './src/pages/PINPage';

export default function App() {
  return (
    <View >
      <LandingPage></LandingPage>
      {/* <OTPPage></OTPPage> */}
      {/* <PINPage></PINPage> */}
    </View>
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
