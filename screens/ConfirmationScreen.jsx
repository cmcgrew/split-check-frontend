import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';


export default function ConfirmationScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Confirmation Screen</Text>
        <Button
          title="Go to ShareLink"
          onPress={() => navigation.navigate('ShareLink')}
        />
      </View>
    );
  }