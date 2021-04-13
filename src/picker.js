import React, {useState} from 'react';
import {Text,View, Image, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Picker = () => {
  const [avatar,setAvatar] = useState(null)

  const getAvatar = () => {

  launchImageLibrary({}, response => {
    // if(response.didCancel) {
    //   console.log('user canceled')
    // } else if (response.error) {
    //   console.log (response.error)
    // } else {
    //   console.log(response.uri)
    //    setAvatar(response.uri);
    // }
    const source = { uri: "data:image/jpeg;base64," + response.data}
    console.log(source)
   setAvatar(response.uri);
  })

    // ImagePicker.showImagePicker({}, response => {
    //   setAvatar(response.uri);
    // })
  }

  return (
    <View>
      <Image 
        source={{uri:avatar}}
        style={styles.avatar}
      />
      <Button 
        title="Add your avatar"
        onPress={getAvatar}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar:{
    width:"100%",
    height:400
  }
})
export default Picker;

