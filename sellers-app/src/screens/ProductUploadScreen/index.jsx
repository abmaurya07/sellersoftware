// OrderDetailsScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Share,
  Linking,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import base64 from 'react-native-base64'
import { Buffer } from 'buffer';

import ImagePicker from 'react-native-image-crop-picker';
const pickImage = async (setImage) => {

  ImagePicker.openPicker({
    width: 300,
    height: 400,
    multiple: true,
    cropping: true
  }).then(image => {
    setImage(image);

    console.log('image',image);
  }).catch(error => {
    console.log('error', error);
  })
  


};



// Component for Rendering UI
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Assets
import PENDINGIMAGE from 'assets/images/PENDING.png';
import SEMICODIMAGE from 'assets/images/SEMICOD.png';
import PREPAIDIMAGE from 'assets/images/PREPAID.png';

// Components for rendering UI
import {
  Section,
  Column,
  Row,
  BlackText,
  GreyText,
  HeadingText,
  BoldText,
  Divider,
  Spacer,
} from 'ui-components';
import { api, wooAPI } from '../../api/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentStatusImage: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});

//----Screen----

const  ProductUploadScreen = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);


  const uploadImage = async (image) => {
    const lastIdx = image.path.lastIndexOf('/') 
    const filename = image.path.substring(lastIdx + 1)
     console.log('start')
    const formData = new FormData();
    formData.append('media_attachment', {
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    
    try {
       const response = await wooAPI.post('media/', formData);


       console.log('Response--->', response)

      if (response.ok) {
          const data = await response.json();
          console.log('Media uploaded successfully:', data);
          return data;
      } else {
          console.error('Error uploading image response not ok:', response.status);
          throw new Error('Image upload failed');
      }
  } catch (err) {
      console.error('Error uploading image api error:', err.code);
      throw err;
  }
};
  
  const handleSubmit = async () => {

    // Upload images and get image IDs
    const imageIds = [];

    for (const image of images) {
      try {
        const id = await uploadImage(image);
        imageIds.push(id);
      } catch (err) {
        console.error('Error uploading image', err);
      }
    }

    return

console.log('Image Ids---->', imageIds)
    const product = {
      name,
      type: "simple",
      description,
      price,
      images: [{id: imageIds[0]}]
    };

    
    await wooAPI.post('products', product);
  }
console.log('image--------------------', images)
  return (
    <ScrollView>
      <TextInput 
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Description"
        value={description} 
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice} 
      />
 


      <TouchableOpacity onPress={() => pickImage(setImages)}>

      <View style={{borderStyle: 'dashed', borderWidth: 1, height: 100, alignItems: 'center', justifyContent:'center'} }  >

       <Text> Upload Images</Text>
      </View>

    

</TouchableOpacity>
      {images.length > 0 ?
        images.map(((image,idx) => <Image 
          key={idx}
          source={{uri : image.path}}
            style={{width: 200, height: 200}} 
          />))

          :
          null
        
      }

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

//----Components----


export default ProductUploadScreen;
