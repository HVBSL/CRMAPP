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
import { SelectList } from 'react-native-dropdown-select-list';
import { Entypo, Ionicons } from '@expo/vector-icons';
const FollowUp = ({navigation}) => {
  const [selected, setSelected] = React.useState('');
  const data = [
    { key: '1', value: 'Pending' },
    { key: '2', value: 'Inprocess' },
    { key: '3', value: 'Completed' },
  ];
  const def=data[0];
  const Backto =()=>{
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
            onPress={(Backto) }
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.txt}>Leads Name</Text>
          <Text style={styles.name}>Status</Text>
          <View style={styles.status}>
            <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              defaultOption={def}
              search={false}
              boxStyles={{
                border: 'none',
                borderColor: 'white',
                borderRadius:25,
                color: 'black',
                backgroundColor: 'white',
                width: 275,
                marginLeft: 15,
                zIndex: 1000,

              }}
              arrowicon={
                <Entypo
                  name="chevron-small-down"
                  size={24}
                  color="black"
                  backgroundColor="white"
                />
              }
              dropdownStyles={{
                width: 130,
    position:'absolute',
    zIndex: 4000,
                backgroundColor: 'white',
              }}
              save="value"
            />
          </View>
          <View style={styles.btn}>
            <Button
              style={styles.button}
              title="Submit"
              accessibilityLabel="Submit"
            />
            </View>
            </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fullContainer:{
    height:'100%'
  },
  container: {
    padding: 15,
    margin: 33,
    // flex: 1,
    //  marginBottom:-10,
    height: 300,
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
  name: {
    padding: 8,
    fontSize: 20,
    color:"white"
  },
  txt: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 25,
    fontSize: 20,
    padding: 13,
    paddingLeft:17,
    fontSize:15
  },
  status: {
    padding: 2,
    // borderWidth:10,
    position:'absolute',
    top:149,
    left:10,
    marginLeft:-10,
    width:400
    // borderRadius: 25,
    
  },
  button: {
    marginBottom: 15,
    padding: 10,
    zIndex:0
  },
  btn:{
    //  position:'relative',
     marginTop:80
  },
});
export default FollowUp;