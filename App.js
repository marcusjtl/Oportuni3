import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import aws_exports from './aws-exports';
import { withAuthenticator, S3Image } from 'aws-amplify-react-native';
import Amplify, { Storage } from 'aws-amplify';



Amplify.configure(aws_exports);
Storage.configure({ level: 'private'});


class App extends React.Component {
  state = {
    photo: null,
    photoURL: null,
    photoName: null,
    photoBody: null,
  }

  handleChoosePhoto = async () => {
    let document = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All
    });
    
    console.log(document);

    Storage.put('images/test.jpg', document.uri, "public")
      .then(result => {
        console.log('result: ', result)
        //this.setState({photo: '', photoURL: '', photoName: ''})
      })
      .catch(err => {
        console.log('error uploding file', err)
      })

    var base64dataBody = new Buffer(result, 'binary');

    if(!result.cancelled) {
      this.setState({ photoURL: result.uri, photo: result, photoName: result.uri, photoBody: base64dataBody });
    }
  };

  /*uploadS3 = () => {
    Storage.put(this.state.photoURL, 'Hello World', "public")
      .then(result => {
        console.log('result: ', result)
        //this.setState({photo: '', photoURL: '', photoName: ''})
      })
      .catch(err => {
        console.log('error uploding file', err)
      })
  };*/

  render() {
    let {photo,photoURL} = this.state;

    return (
      <View style={styles.container}>

        {photo && (
              <Image source={{uri: photo }} style = {{ width: 200, height: 200 }}/>
        )}

        <Button 
        title="Upload Your Drivers License" 
        onPress={this.handleChoosePhoto} 
        />
          
        <Button
        title = "Upload Paystub"
        onPress={this.uploadS3}
        />

        <S3Image body={this.state.photoBody}/>
        

      </View>


    );
  }
}

export default withAuthenticator(App, {
  signUpConfig: {
    signUpFields: [
      {label: "First Name", key: "given_name", required: true, type: "string"},
      {label: "Last Name", key: "family_name", required: true, type: "string"},
      {label: "Address", key: "address", required: true, type: "string"},
      {label: "Birthdate: 00/00/0000", key: "birthdate", required: true, type: "string"}
    ]
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
