import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';



export default function TaxScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tax Screen</Text>
        <Button
          title="Go to Confirmation"
          onPress={() => navigation.navigate('Confirmation')}
        />
      </View>
    );
  }