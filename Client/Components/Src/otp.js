import React, { useState, useRef } from 'react';
import { StyleSheet,  View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD9EkgOUrMNVBAGs25uLqpO3vlhqU1PCX8",
  authDomain: "phoneotp-bd0ee.firebaseapp.com",
  databaseURL: "https://phoneotp-bd0ee-default-rtdb.firebaseio.com",
  projectId: "phoneotp-bd0ee",
  storageBucket: "phoneotp-bd0ee.appspot.com",
  messagingSenderId: "117610587698",
  appId: "1:117610587698:web:ac375976f3c789cd3afe2b",
  measurementId: "G-QTZFSYYBQS"
}
firebase.initializeApp(firebaseConfig);

export default function App({navigation}) {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('+916385287327');
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [message, showMessage] = useState('')

  const handleSendVerificationCode = async () => {
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider()
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  }

  const handleVerifyPhoneNumber = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      console.log(credential);
      await firebase.auth().signInWithCredential(credential);
      showMessage({ text: "Phone authentication successful " });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  }
  
  const LeadsLogin =()=>{
    navigation.navigate("Leads")
  }
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        value={phoneNumber}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={handleSendVerificationCode}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={handleVerifyPhoneNumber}
      />
                  <TouchableOpacity  style={styles.Continue} onPress={LeadsLogin} >
                <Text style={styles.tonext }
                 >Proceed
                </Text>
                </TouchableOpacity>
      {message ? (
        <TouchableOpacity
          style={[StyleSheet.absoluteFill, { backgroundColor: 0xffffffee, justifyContent: "center" }]}
          onPress={() => showMessage(undefined)}>
          <Text style={{color: message.color || "blue", fontSize: 17, textAlign: "center", margin: 20, }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
}

const styles = StyleSheet.create({
    Continue:{
        width: 300,
        backgroundColor: '#002D5BAD',
        borderRadius: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // bottom: 10,
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 18,
        borderColor: '#002D5BAD',
       },
       tonext:{
        color: 'white',
      },
})