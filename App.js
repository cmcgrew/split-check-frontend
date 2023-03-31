import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmationScreen from './screens/ConfirmationScreen';
import HomeScreen from './screens/HomeScreen';
import ScanPreviewScreen from './screens/ScanPreview';
import ShareLinkScreen from './screens/ShareLinkScreen';
import TaxScreen from './screens/TaxScreen';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ScanPreview" component={ScanPreviewScreen} />
        <Stack.Screen name="Tax" component={TaxScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="ShareLink" component={ShareLinkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
