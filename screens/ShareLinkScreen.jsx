import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';


export default function ShareLinkScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Share Link Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
  