import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
// import Btn from './Components/Btn';

import axios from './Axios.js';
// import axios from 'axios';

export default function APIs() {
    // const [data, setData] = useState([]);


    const getAPI = () => {
        axios.get('/home').then((res) => { console.log(res); }).catch(err => console.log(err))

        // res.data
        // res.status - 200, 201, 400, 404, 500, 3xx
    };

    // const get_by_ID = () => {
    //     Axios({
    //         method: 'GET',
    //         url: `${baseURL}/`,
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }

    const postAPI = () => {
        axios({
            method: 'POST',
            url: `${baseURL}/posts`,
            body: JSON.stringify({
                id: 101,
                title: 'New Title',
                boldy: 'New Body for the data.'
            })
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    const patchAPI = () => {
        axios({
            method: "PATCH",
            url: `${baseURL}/posts/16`,
            body: JSON.stringify({
                title: 'Updated Title',
            })
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    const deleteAPI = () => {
        axios({
            method: "DELETE",
            url: `${baseURL}/posts/16`
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <View>
            <Text
                style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'black',
                }}>
                APIs
            </Text>

            <Button style={styles.button} title="GET" onPress={getAPI} />
            <Button style={styles.button} title="GET By Id" />
            <Button style={styles.button} title='POST' Press={postAPI} />
            <Button style={styles.button} title='PATCH' Press={patchAPI} />
            <Button style={styles.button} title='DELETE' Press={deleteAPI} />

            {/* <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text
            style={{
              fontSize: 40,
              color: 'black',
              textAlign: 'center',
            }}>
            No Data
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{fontSize: 22, color: 'black'}}>Id: {item.id}</Text>
            <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>Title: {item.title}</Text>
            <Text style={{fontSize: 22, color: 'black'}} numberOfLines={1}>Body: {item.body}</Text>
          </View>
        )}
      /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 15,
        padding: 8,
    },
})