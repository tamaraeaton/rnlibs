import React, {useState} from 'react';
import {Text,View, Image, StyleSheet, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
  const [avatar,setAvatar] = useState(null)

  const getAvatar = () => {
    ImagePicker.showImagePicker({}, response => {
      setAvatar(response.uri);
    })
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
export default App;

