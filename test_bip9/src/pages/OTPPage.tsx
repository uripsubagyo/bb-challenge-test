import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';

type propOTP = {
    phoneNumber: bigint,
    navigation: any
}
export default function OTPPage(props: propOTP) {
  return (
    <SafeAreaView>
        <HeaderNavigation title={"Masukkan Kode OTP"} navigation={props.navigation} goBack={'Home'}></HeaderNavigation>
        <View style={stylesOTP.container}>
            <Image source={require("../assets/LOGIN-VECTOR.png")} style={stylesOTP.image}/>
            <Text style={stylesOTP.textHead}>Kode OTP Sudah Dikirim!</Text>
            <Text style={[stylesOTP.textDecs, {marginTop:16}]}>Silahkan cek WhatsApp kamu!</Text>
            <Text style={stylesOTP.textDecs}>Jika kode OTP belum terkirim, klik “Kirim Ulang”</Text>

            <View style={stylesOTP.inputContainer}>
                <TextInput style={stylesOTP.input} maxLength={1} keyboardType='number-pad'></TextInput>
                <TextInput style={stylesOTP.input} maxLength={1} keyboardType='number-pad'></TextInput>
                <TextInput style={stylesOTP.input} maxLength={1} keyboardType='number-pad'></TextInput>
                <TextInput style={stylesOTP.input} maxLength={1} keyboardType='number-pad'></TextInput>
            </View>
            <Text>
                <Text>Belum dapat kode? </Text>
                <Text>(Tunggu 15s)</Text>
            </Text>
        </View>
    </SafeAreaView>
  );
}

const stylesOTP = StyleSheet.create({
    container:{
        alignItems:'center'
    },
  image:{
    height: 192,
    width:192,
    marginTop: 42
  },
  textHead:{
    fontSize: 20,
    fontWeight: '600',
  },
  textDecs:{
    color: ('#757575'),
  },

  inputContainer:{
    marginTop:31,
    marginBottom: 31,
    flexDirection: 'row',
    gap: 12
  },
  input:{
    fontSize: 20,
    backgroundColor: ('#E9F0FF'),
    height:52,
    width:46,
    borderRadius:12,
    textAlign: 'center'
  }
});

