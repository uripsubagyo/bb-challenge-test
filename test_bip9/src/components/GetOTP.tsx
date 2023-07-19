import { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';


const GetOTP = () => {
    const [timerLeft, setTimerLeft] = useState(15)
    useEffect(()=> {
        const time = setTimeout(()=> {
            setTimerLeft(timerLeft - 1);
        }, 1000)
    }, [timerLeft])
    
    return (
        <Text>
            {timerLeft}
        </Text>
    )
}
export default GetOTP;