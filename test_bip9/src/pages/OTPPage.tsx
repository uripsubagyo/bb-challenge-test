import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';

export default function OTPPage() {
  return (
    <SafeAreaView>
        <View style={stylesOTP.container}>
            <Image source={require("../assets/LOGIN-VECTOR.png")} style={stylesOTP.image}/>
            <Text style={stylesOTP.textHead}>Kode OTP Sudah Dikirim!</Text>
            <Text style={[stylesOTP.textDecs, {marginTop:16}]}>Silahkan cek WhatsApp kamu!</Text>
            <Text style={stylesOTP.textDecs}>Jika kode OTP belum terkirim, klik “Kirim Ulang”</Text>


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
  }
  
});

