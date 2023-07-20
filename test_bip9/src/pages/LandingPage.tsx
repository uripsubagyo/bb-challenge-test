import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigation/root';


type props = NativeStackScreenProps<RootStackParamList, "Home">

export default function LandingPage({navigation} : props) {

  const background = require("../assets/background.png");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [err, setErr] = useState(false)

  
  function masuk(){
     if(phoneNumber.length < 12){
        setErr(true)
    } else{
        navigation.push('OTP', {
            phoneNumber: phoneNumber,
        });
    }
  }

  return (
    <View style={{flex: 1, backgroundColor:"white"}}>
        <SafeAreaView style={{ backgroundColor: '#1F69FF'}} />
        <ScrollView style={{backgroundColor: 'white'}}>
                <ImageBackground source={require("../assets/background.png")} resizeMode="cover" style={styles.landingbackground}>
                    <View style={styles.container}>
                       <View style={styles.landingDecs}>
                            <Image source={require("../assets/Logo-Bangbeli-Primary-2.png")} style={styles.logo}/>
                            <Text style={styles.whitetext}>
                                <Text>Mari bergabung dengan </Text>
                                <Text style={styles.boldText}>13.000+ </Text>
                                <Text> Mitra Bangbeli yang tersebar di </Text>
                                <Text style={styles.boldText}>11 </Text>
                                <Text>Provinsi Indonesia.</Text>
                            </Text>
                       </View>
                    </View>
                </ImageBackground>
                <View style={styles.container}>
                            <Text style={stylesWa.text}>Masukan No WhatsApp</Text>
                            <TextInput dataDetectorTypes='phoneNumber' 
                            placeholder="0812********" 
                            keyboardType="numeric" 
                            style={stylesWa.input}
                            onChangeText={(i) => setPhoneNumber(i)}
                            maxLength={14}
                            />
                            <View style={stylesWa.infoText}>
                                <Image source={require("../assets/danger-circle.png")} style={stylesWa.dangerIcon}/>
                                <Text>Masukan nomor WhatsApp yang terdaftar dalam aplikasi Bangbeli</Text>
                            </View>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity style={[stylesButton.button, stylesButton.btnMasuk]} onPress={() => masuk()}> 
                        <Text style={[stylesButton.text,stylesButton.textMasuk]}>Masuk</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[stylesButton.button, stylesButton.btnDaftar]}> 
                        <Text style={[stylesButton.text,stylesButton.textDaftar]}>Daftar</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    padding: 16
  },

  landingbackground: {
    aspectRatio: 1,
  },

  landingDecs:{
    marginTop:22
  },

  logo: {
    height: 50,
    width: 139.37
  },

  whitetext:{
    color: 'white',
    fontSize: 16,
    lineHeight:24
    },
  boldText:{
    fontWeight:'700'
  },
  waHead:{
    color: ('#404040')
  }
});

const stylesWa = StyleSheet.create({
    text:{
        color: ('#404040'),
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
        marginBottom:8
    },

    input:{
        padding: 12,
        borderRadius: 12,
        backgroundColor: ('#E9F0FF'),
    },

    infoText:{
        marginTop:16,
        flexDirection:'row',
        backgroundColor: ('#F5F5F5'),
        borderRadius: 8,
        padding:20,
        gap: 10,
        borderColor: ('#E0E0E0'),
        borderWidth: 1,
        justifyContent:'center',

    },

    dangerIcon:{
        height:24,
        width:24,
        alignSelf:'center',
    }
})

const stylesButton = StyleSheet.create({
    button:{
        alignItems:'center',
        padding: 12,
        borderRadius: 24,
    },

    btnMasuk:{
        backgroundColor: ('#1F69FF'), 
    },

    btnDaftar:{
        marginTop:12,
        backgroundColor: ('#FFFFFF'), 
        borderWidth: 1,
        borderColor: ('#1F69FF')
    },

    text:{
        fontSize: 20,
        fontWeight: '600',
        lineHeight:26
    },
    textMasuk:{
        backgroundColor: ('#1F69FF'), 
        color:'white',
        fontSize: 20,
    },
    textDaftar:{
        backgroundColor: 'white',
        borderColor: ('#1F69FF'),
        color: ('#1F69FF'),
        fontSize: 20,
    },
})



