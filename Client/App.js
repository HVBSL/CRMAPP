import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './Components/Src/Index';
import Googleauth from './Components/Src/Googleauth';
import Facebook from './Components/Src/Facebook';
import otp from './Components/Src/otp'
import Leads from './Components/Src/Leads';
import Leadscreation from './Components/Src/Leadscreation'
import Followup from './Components/Src/Followup'
import APIs from './Components/Src/APIs';

const stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <APIs />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            header: () => null // hide the header for all screens
          }}>
          <stack.Screen
            name="Index"
            component={Index} />
          <stack.Screen
            name="Googleauth"
            component={Googleauth} />
          <stack.Screen
            name="Facebook"
            component={Facebook} />
          <stack.Screen
            name="otp"
            component={otp} />
          <stack.Screen
            name='Leads'
            component={Leads} />
          <stack.Screen
            name="Leadscreation"
            component={Leadscreation} />
          <stack.Screen
            name="Followup"
            component={Followup} />



        </stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
