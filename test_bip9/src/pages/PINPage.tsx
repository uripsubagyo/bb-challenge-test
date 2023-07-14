import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function PINPage() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text>Masukkan PIN</Text>
            {/* TODO: BUAT DOT PIN */}
            <View>
                <View>
                    <TouchableOpacity>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>6</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>9</Text>
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
    height: '100%'
  },

  btnRow:{
    // flex: 1,3
    // flexDirection: 'row'
  }
});
