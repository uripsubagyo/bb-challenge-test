import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';

export default function LandingPage() {

  const background = require("../assets/background.png");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [err, setErr] = useState(false)

  const navigation = useNavigation();
  function masuk(){
    navigation.push('OTP');
  }

  
  return (
    <SafeAreaView>
        <ScrollView>
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
                            <TextInput placeholder="0812********" keyboardType="numeric" style={stylesWa.input}/>

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
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container:{
    // flex:1,
    // flexDirection: 'column',
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
        borderColor: ('black'), 
        justifyContent:'center'
    },

    dangerIcon:{
        height:24,
        width:24,
        alignSelf:'center'
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



