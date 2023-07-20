import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData, Alert, } from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';
import GetOTP from '../components/GetOTP';
import {useRef, useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/root';


type propsOTP = NativeStackScreenProps<RootStackParamList, "OTP">

export default function OTPPage({route,navigation}: propsOTP) {
  const inputLenth = 4;  
  const inputRefs = useRef<Array<NonNullable<TextInput>>>([]);
  const [OTP, setOTP] = useState<String[]>(["","","",""]);
  const [fullOTP, setFullOTP] = useState<number>(0);


  const handleChange = (text: String, index:number) => {
    onChangeValue(text, index);
    
    if(fullOTP === 4){
        navigation.navigate("PIN", {
          phoneNumber: route.params.phoneNumber
        })
    } else {
      if(text.length != 0){
        return inputRefs?.current[index + 1]?.focus()
      }
      return inputRefs?.current[index-1]?.focus()
    }
  }

  const onChangeValue = (text:String, index:number) => {
      const newOTP = OTP.map((item, itemindex)=> {
        if(itemindex == index){
          if(item === ""){
            if(text != ""){
              setFullOTP(fullOTP + 1);
            } 
          } else if(text === ""){
            if(item != ""){
              setFullOTP(fullOTP - 1);
            }
          } 
          return text;
        }
        return item;
      }
    )
    setOTP(newOTP);
  }

  const removeOTP = (event:NativeSyntheticEvent<TextInputKeyPressEventData>, index:number) =>{
    const {nativeEvent} = event;

    if(nativeEvent.key.match('Backspace')){
        handleChange("", index)
    }
    
  }

  return (
    <View>
      <SafeAreaView style={{flex: 1, backgroundColor:'#1F69FF'}} />
          <HeaderNavigation title={"Masukkan Kode OTP"} navigation={navigation} goBack={'Home'}></HeaderNavigation>
          <View style={stylesOTP.container}>
              <Image source={require("../assets/LOGIN-VECTOR.png")} style={stylesOTP.image}/>
              <Text style={stylesOTP.textHead}>Kode OTP Sudah Dikirim!</Text>
              <Text style={[stylesOTP.textDecs, {marginTop:16}]}>Silahkan cek WhatsApp kamu!</Text>
              <Text style={stylesOTP.textDecs}>Jika kode OTP belum terkirim, klik “Kirim Ulang”</Text>
              <View style={stylesOTP.inputContainer}>
                  {
                    Array<number>(inputLenth).fill(4).map((item, index)=>(
                      <TextInput style={stylesOTP.input}
                      ref={ ref =>{
                          if (ref && !inputRefs.current.includes(ref)){
                            inputRefs.current = [...inputRefs. current, ref]
                          }
                        }}
                      key={index}
                      maxLength={1} 
                      keyboardType='numeric'
                      contextMenuHidden
                      selectTextOnFocus
                      blurOnSubmit={false}
                      testID={ `OTPInput-${index}`}
                      onChangeText={text => handleChange(text, index)}
                      onKeyPress={event => removeOTP(event, index)}
                      // onKeyPress = {e => {e.nativeEvent.key === 'Backspace' ? alert('delete') : alert(e)}}
                      ></TextInput>
                    ))
                  }   
              </View>
              <Text>
                  <Text>Belum dapat kode? </Text>
                  {<GetOTP style={stylesOTP.timer}></GetOTP>}
              </Text>
          </View>
     </View>
  );
}

const stylesOTP = StyleSheet.create({
    container:{
        alignItems:'center',
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
  },
  timer:{
    color: ('#1F69FF')
  }
});

