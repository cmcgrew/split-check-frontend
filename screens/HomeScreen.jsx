import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Scan Receipt"
          onPress={() => navigation.navigate('Camera')}
        />
      </View>
    );
  }