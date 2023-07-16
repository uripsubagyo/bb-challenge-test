
import { SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';

type propsHeaderNavigation =  {
    navigation: any,
    goBack: any,
    title: String,
}

const HeaderNavigation = (props: propsHeaderNavigation) =>{
    function goBack() {
        props.navigation.goBack();
    }
    return (<View style={styleHeader.headerSection}>
        <TouchableOpacity onPress={()=> goBack()}>
            <Image source={require('../assets/chevron-left.png')} style={styleHeader.image}/>
        </TouchableOpacity>
        <Text style={styleHeader.text}>{props.title}</Text>
    </View>)
}
export default HeaderNavigation;

const styleHeader = StyleSheet.create({
    headerSection:{
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        backgroundColor: ('#1F69FF')
    },

    image: {
        height: 24,
        width: 24,
        alignSelf: 'center'
    },
    text:{
        alignSelf:'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        marginLeft:12
    }
})