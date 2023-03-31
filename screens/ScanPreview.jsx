import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';


export default function ScanPreviewScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Scan Preview Screen</Text>
        <Button
          title="Go to Tax"
          onPress={() => navigation.navigate('Tax')}
        />
      </View>
    );
  }