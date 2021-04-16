import React, { useState, useEffect } from 'react';
import {
  Text, View,
  Image, StyleSheet,
  Button, PermissionsAndroid, Platform
} from 'react-native';
import Contacts from 'react-native-contacts';

import Picker from './src/picker'



// left out ios if statement
const App = () => {
  const [contacts, setContacts] = useState([])


  const requestPermission = async() => {
    try {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS
      ],
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts',
          'buttonPositive': 'Please accept bare mortal'
        }
      )
      // return granted['android.permission.WRITE_CONTACTS'] === PermissionsAndroid.RESULTS.GRANTED
        .then(() => {
          Contacts.getAll().then(contacts => {
            setContacts(contacts)

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

  const addContact = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          familyName: 'Steve',
          givenName: 'Jones'
        };
        Contacts.addContact(newContact).then(()=> {
          getContacts();
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
            <Button
        title="add contact"
        onPress={() => addContact()}
      />
      {
        contacts.map((item) => (
          <View
            key={item.recordID}
            style={{
              padding: 10,
              borderBottomColor: 'red',
              borderBottomWidth: 1
            }}
          >
            <Text>Name:{item.familyName}</Text>
            <Text>Email:{
              item.emailAddresses[1] ?
                item.emailAdresses[1].email
                : null
            }</Text>

          </View>
        ))
      }
    </View>
  )
}


export default App;

