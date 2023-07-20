import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const Leads = ({navigation}) => {
  const [address, setAddress] = React.useState('')
  const Back =()=>{
    navigation.navigate("Leads")
  }
  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.fullContainer}
        colors={['#43CEA2', '#185A9D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.back}>
          <Ionicons.Button
            name="chevron-back-sharp"
            size={24}
            color="black"
            backgroundColor="white"
            onPress={Back} 
          />
        </View>
        <View style={styles.container}>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}>
            <Text style={styles.font}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              keyboardType="Enter Name"
              textContentType="Name"
            />
            <Text style={styles.font}>Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Number"
              textContentType="Number"
              keyboardType='numeric'
            />
            <Text style={styles.font}>E-Mail</Text>
            <TextInput
              style={styles.input}
            
              textContentType="Enter e-mail"
              placeholder="Enter e-mail"
            />
            <Text style={styles.font}>Address</Text>
            <TextInput
              style={styles.address}
              
              textContentType="Enter Address"
              placeholder="Enter Address"
            />
            <Text style={styles.font}>Profession</Text>
            <TextInput
              style={styles.input}
            
              textContentType="Enter Profession"
              placeholder="Enter Profession"
            />
            <Text style={styles.font}>Social Media</Text>
            <TextInput
              style={styles.input}
              
              placeholder="Enter Social Media Link (custom field)"
            />
            <Button
              style={styles.button}
              title="Submit"
              accessibilityLabel="Submit"
            />
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // fullcontainer:{
  //   // marginBottom:-200,
  //   height:"100%"
  // },
  container: {
    padding: 15,
    margin: 33,
    // flex: 1,
    //  marginBottom:-10,
    height: '82%',
    width: '85%',
    borderRadius: 20,
    backgroundColor: '#FFF8F826',
  },
  back: {
    backgroundColor: 'white',
    width: 50,
    borderRadius: 25,
    margin: 10,
    marginTop: 30,
  },
  input: {
    height: 40,
    marginBottom: 12,
    padding: 10,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  address: {
    //height: 70,
    marginBottom: 12,
    padding: 8,
    paddingBottom: 20,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  font: {
    color: 'white',
    fontSize: 20,
  },
  button: {
    marginBottom: 15,
    padding: 8,
  },
});
export default Leads;