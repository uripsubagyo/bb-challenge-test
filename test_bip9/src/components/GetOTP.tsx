import { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet} from 'react-native';


const GetOTP = () => {
    const [timerLeft, setTimerLeft] = useState(15)

    useEffect(()=> {
        if(timerLeft <= 0) return;

        const time = setTimeout(()=> {
            setTimerLeft(timerLeft - 1);
        }, 1000)

        return () => clearTimeout(time);
    }, [timerLeft])
    
    return (
        <Text style={stylesGetOTP.timer}>
            {timerLeft == 0? "Kirim Ulang": `(Tunggu ${timerLeft}s)`}
        </Text>
    )
}
export default GetOTP;


const stylesGetOTP = StyleSheet.create({
    timer:{
        color: ('#1F69FF')
      }
})