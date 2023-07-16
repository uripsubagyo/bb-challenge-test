import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function PINPage() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.textPin}>Masukkan PIN</Text>
            {/* TODO: BUAT DOT PIN */}
            <View style={styles.circleSection}>
                <View style={[styles.circle, styles.circleNone]}></View>
                <View style={[styles.circle, styles.circleNone]}></View>
                <View style={[styles.circle, styles.circleNone]}></View>
                <View style={[styles.circle, styles.circleNone]}></View>
                <View style={[styles.circle, styles.circleNone]}></View>
            </View>
            <View style={styleNumber.numberSection}>
                <View style={styleNumber.row}>
                    <TouchableOpacity >
                        <Text style={styleNumber.textButton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleNumber.row}>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>6</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleNumber.row}>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styleNumber.row}>
                    <View style={{width:24,}}></View>
                    <TouchableOpacity>
                        <Text style={styleNumber.textButton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Image source={require("../assets/delete.png")} style={styleNumber.delete}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  },

  circleNone:{
    backgroundColor:'white'
  },

  circleField:{
    backgroundColor:'#FFFFF1'
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