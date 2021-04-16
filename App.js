import React, { useState, useEffect } from 'react';
import {
  Text, View,
  Image, StyleSheet,
  Button, PermissionsAndroid
} from 'react-native';
import Contacts from 'react-native-contacts';

import Picker from './src/picker'



// left out ios if statement
const App = () => {
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // somewhere it says to use getAll at the beginning?
  const getContacts = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll().then(contacts => {
          console.log(contacts)
        })
      }
    })
  }


  return (
    <View>
      <Button
        title="get contacts"
        onPress={() => getContacts()}
      />
    </View>
  )
}


export default App;

