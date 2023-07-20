import React, { useState } from "react";
import { Text, View, Image, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Login = ({ navigation }) => {
  const [Phonenumber, setPhonenumber] = useState(null);
  const handleLogin = () => {
    //console.log(`Logging in with username: ${username} `);
    //console.log((navigation.navigate("Facebook")))
  };
  const googlelogin = () => {
    navigation.navigate("Googleauth");
  }
  const facebooklogin = () => {
    navigation.navigate("Facebook");
    console.log(`Logging in with username: `);
  }
  const otpLogin = () => {
    navigation.navigate("otp");
  }

  return (
    <>
      <LinearGradient
        style={styles.fullContainer}
        colors={['#43CEA2', '#185A9D']}
        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      >
        <View>
          <View style={styles.subcontainer}>
            <View style={styles.signup}>
              <Text style={styles.firsig} >SIGN UP</Text>
            </View>
            <TouchableOpacity onPress={googlelogin} style={styles.google}>
              <Image source={require("../../assets/Images/google.png")}
                style={styles.googleimage} />
              <Text style={styles.gtext}

              >Continue With Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={facebooklogin} style={styles.facebook}>
              <Image source={require("../../assets/Images/facebook.png")}
                style={styles.facebookimage} />

              <Text style={styles.fbtext}

              > Continue With Facebook
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', bottom: 15, width: '90%' }}>
              <View style={{ flex: 1, height: 1, backgroundColor: '#FFFFFF9C', bottom: 10 }} />
              <View>
                <Text style={{ width: 50, textAlign: 'center', bottom: 10, color: '#FFFFFF9C' }}>(OR)</Text>
              </View>
              <View style={{ flex: 1, height: 1, bottom: 10, backgroundColor: '#FFFFFF9C' }} />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Number"
                value={Phonenumber}
                onChangeText={setPhonenumber}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity style={styles.Continue} onPress={otpLogin} >
              <Text style={styles.tonext}
              >Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  subcontainer: {
    alignItems: "center",
    height: '70%',
    width: 350,
    borderRadius: 20,
    backgroundColor: '#FFFFFF26',
    marginTop: 60,
  },
  signup: {
    color: 'white',
    height: "20%",
    //fontSize:45,
    // fontWeight:'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  google: {
    paddingLeft: 40,
    height: 50,
    width: 300,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    // marginBottom: 10,
    bottom: 40,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // display:'flex',
    flexDirection: 'row',
    boxShadow: ' #00000021',
  },
  facebook: {
    paddingLeft: 35,
    height: 50,
    width: 300,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 22,
    marginTop: 20,
    bottom: 30,
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'white',
  },
  Continue: {
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
  input: {
    height: 50,
    width: 300,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    borderColor: 'white',
  },
  //  FOR FONTS
  //  FOR FONTS
  //  FOR FONTS
  tonext: {
    color: 'white',
  },
  fbtext: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  gtext: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  firsig: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  //icons
  //icons
  //icons
  googleimage: {
    width: 30,
    height: 30,
    marginLeft: 17,
  },
  facebookimage: {
    width: 30,
    height: 30,
    marginLeft: 17,
  },
});
export default Login;







