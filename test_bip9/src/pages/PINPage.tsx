import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import HeaderNavigation from '../components/HeaderNavigation';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';



type propsPIN = NativeStackScreenProps<RootStackParamList, "PIN">

export default function PINPage(props: propsPIN) {
    const [PIN, setPIN] = useState<number[]>([])
    const [myPIN, setPin] = useState<String>("")
    const lengthPin:number[] = [1, 2, 3, 4, 5, 6]


    function addPIN(data: number){
        if(PIN.length <= 6){
            let temp:number[] = [...PIN, data]
            setPIN(temp)
            console.log(PIN)

            if(PIN.length == 6){
                let pin = PIN.join("");
                setPin(pin)
            }
        }
    }

    function removePIN(){
        if(PIN.length != 0){
            let pin:number[] = PIN;
            pin.pop();
            setPIN(pin);
        }
    }

  return (
    <View>
        <SafeAreaView style={stylesPINPage.safeArea}/>
        <HeaderNavigation navigation={props.navigation} goBack= "Home" title={""}/>
        <View style={stylesPINPage.container}>
            <Text style={stylesPINPage.textPin}>Masukkan PIN</Text>
            <View style={stylesPINPage.circleSection}>
                {lengthPin.map(() => 
                    <View style={stylesPINPage.circle}>
                    </View> )
                }
            </View>
            <View style={styleNumber.numberSection}>
                <View style={styleNumber.row}>
                    <TouchableOpacity onPress={()=> addPIN(1)}>
                        <Text style={styleNumber.textButton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(2)}>
                        <Text style={styleNumber.textButton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(3)}>
                        <Text style={styleNumber.textButton}>3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleNumber.row}>
                    <TouchableOpacity onPress={()=> addPIN(4)}>
                        <Text style={styleNumber.textButton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(5)}>
                        <Text style={styleNumber.textButton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(6)}>
                        <Text style={styleNumber.textButton}>6</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleNumber.row}>
                    <TouchableOpacity onPress={()=> addPIN(7)}>
                        <Text style={styleNumber.textButton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(8)}>
                        <Text style={styleNumber.textButton}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> addPIN(9)}>
                        <Text style={styleNumber.textButton}>9</Text>
                    </TouchableOpacity>
                </View>


                <View style={styleNumber.row}>
                    <View style={{width:24,}}></View>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removePIN()}>
                         <Image source={require("../assets/delete.png")} style={styleNumber.delete}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </View>
  );
}

const stylesPINPage = StyleSheet.create({
    safeArea:{
        backgroundColor: "#1F69FF"
    },

  container: {
    backgroundColor: '#1F69FF',
    height: '100%',
    
  },

  textPin:{
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
    lineHeight:24,
    alignSelf:'center',
    marginTop:65
  },

  circleSection:{
    marginTop:31,
    marginBottom:172,
    flexDirection: 'row',
    justifyContent:'center',
    gap:12
  },

  circle:{
    height: 14,
    width: 14,
    borderRadius: 30,
    backgroundColor:'white'

  },

  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});


const styleNumber = StyleSheet.create({
    numberSection:{
        paddingLeft: 65,
        paddingRight:65,
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:34
      },
    
    textButton:{
        fontSize: 36,
        color: 'white',
        fontWeight: '600',
        lineHeight: 46
    },

    rowbottom:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 34
    },
    delete:{
        height:36,
        width:36,
        alignSelf:'center'
    }
})