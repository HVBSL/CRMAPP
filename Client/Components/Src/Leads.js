import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Popover from 'react-native-popover-view';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
const Leads = ({navigation}) => {
  const [showPopover, setShowPopover] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const data = [
    { key: '1', value: 'This Week' },
    { key: '2', value: 'This Quater' },
    { key: '3', value: 'This Month' },
    { key: '4', value: 'This Annual' },
  ];
  const dataList = [
    { key: '21', name: 'Nithesh', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '22', name: 'Jillu', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '23', name: 'Junaidh', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '24', name: 'Eswar', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '5', name: 'Balaji', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '6', name: 'Nooru', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '7', name: 'Vignesh', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '8', name: 'Abinash', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '9', name: 'Eswari', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '10', name: 'Rishi', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '11', name: 'Udai', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '12', name: 'Madhi', sharedBy: 'aaa', sharedTo: 'bb' },
    { key: '13', name: 'Rose', sharedBy: 'aaa', sharedTo: 'bb' },
  ];
  const Leadscreation =()=>{
    console.log('leads');
    navigation.navigate("Leadscreation")
    console.log('Finshed');
  }
  const Edit =()=>{
    navigation.navigate("Edit")
  }
  const Followup =()=>{
    navigation.navigate("Followup")
  }
  
  // const Followup =()=>{
  //   navigation.navigate("Followup")
  // }
  // // const [selected, setSelected] = React.useState("");
  // const data2= [
  //     {key:'6', value:'Edit'},
  //     {key:'7', value:'Share'},
  //     {key:'8', value:'Follow up'},
  //     {key:'9', value:'Delete'},
  // ]
  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.fullContainer}
        colors={['#43CEA2', '#185A9D']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Popover
          isVisible={showPopover}
          onRequestClose={() => setShowPopover(false)}>
          <View style={styles.popup}>
            <TouchableOpacity
              onPress={(Leadscreation) 
              }>
              <Text style={styles.popuptext}> Edit </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Share');
              }}>
              <Text style={styles.popuptext}> Share </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(Followup) }>
              <Text style={styles.popuptext}> Follow up </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Delete');
              }}>
              <Text style={styles.popuptext}> Delete </Text>
            </TouchableOpacity>
          </View>
        </Popover>
        <View style={styles.container}>
          <View style={styles.menuTop}>
            <View style={styles.select}>
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                search={false}
                boxStyles={{
                  border: 'none',
                  borderColor: 'white',
                  color: 'black',
                  backgroundColor: 'white',
                  width: 130,
                  margin: 0,
                  zIndex: 10,
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
                  zIndex: 40,
                  backgroundColor: 'white',
                }}
                save="value"
              />
            </View>
            <TouchableOpacity style={styles.plusquara}  >
              <Entypo.Button
                style={styles.plusquarabtn}
                name="plus"
                size={24}
                color="black"
                onPress={(Leadscreation)}
                backgroundColor="white"
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}>
            {dataList.map((data) => (
              <View style={styles.scrollmenu}>
                <View style={styles.scrollmenuline}>
                  <Text style={styles.scrollmenutitle}>{`${data.name}`}</Text>
                  <TouchableOpacity onPress={() => setShowPopover(true)}>
                    <SimpleLineIcons
                      name="options-vertical"
                      size={19}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.scrollmenuline}>
                  <Text style={styles.txt}>Shared By:</Text>
                  <Text style={styles.txt}>Shared To:</Text>
                </View>
                <View style={styles.scrollmenuline}>
                  <Text style={styles.txt}>{`${data.sharedBy}`}</Text>
                  <Text style={styles.txt}>{`${data.sharedTo}`}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  fullContainer: {
    height: '100%'
  },
  popup: {
    width: 150,
    height: 165,
  },
  popuptext: {
    fontSize: 20,
    padding: 7,
  },
  select: {
    position: 'static',
    zIndex: 40,
  },
  txt: {
    fontSize: 14,
  },
  // status:{
  //   backgroundColor: "white",
  //   flexDirection:"row",
  //   width:135,
  //   padding:15,
  //   borderRadius:10,
  // },
  menuTop: {
    flexDirection: 'row',
    zIndex: 50
  },
  container: {
    padding: 15,
    margin: 33,
    // flex: 1,
    //  marginBottom:-10,
    fontfamily: 'poppins',
    height: '90%',
    width: '85%',
    borderRadius: 20,
    backgroundColor: '#FFF8F826',
  },
  plusquara: {
    borderRadius: 10,
    left: 90,
  },
  plusquarabtn: {
    padding: 15,
    borderRadius: 15,
    width: 60,
  },
  scroll: {
    height: 600,
    position: 'absolute',
    width: '100%',
    top: 90,
    left: 15,
    zIndex: 0,
  },
  scrollmenu: {
    backgroundColor: 'white',
    width: '100%',
    height: 96,
    marginTop: 10,
    padding: 7,
    borderRadius: 10,
    position: 'relative',
    zIndex: 0,
  },
  scrollmenuline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollmenutitle: {
    fontSize: 20,
    fontWeight: '900',
    padding: 5,
  },
});
export default Leads;