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
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts',
          'buttonPositive': 'Please accept bare mortal'
        }
      )
        .then(() => {
          Contacts.getAll().then(contacts => {
            console.log(contacts)
          }).catch(err => console.log(err))
        })
    } catch (err) {
      console.warn(err)
    }
  }

 
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
      {/* <Picker /> */}
      <Button
        title="get contacts"
        onPress={() => getContacts()}
      />
    </View>
  )
}


export default App;

