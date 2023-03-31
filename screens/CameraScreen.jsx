import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system';
import { Buffer } from "buffer";
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';


export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState();
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  

  useEffect(() => {
    (async () => {
        if (!cameraPermission) {
            await requestCameraPermission();
        }
        // if (photo) {
        //   const image = photo;
        //   await image.downloadAsync();
        //   setImage(image);
        //   setReady(true);
        // }

    })();
  }, []);
  
//   function dataURItoBlob(dataURI) {
//     // var binary = Buffer.from(dataURI.split(',')[1], 'base64')
//     var binary = atob(dataURI.split(',')[1]);
//     var array = [];
//     for(var i = 0; i < binary.length; i++) {
//         array.push(binary.charCodeAt(i));
//     }
//     return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
// }


// const compressImage = async () => {
//   const manipResult = await manipulateAsync(photo.uri,
//     [],
//     { compress: 0.5, format: SaveFormat.JPEG }
//   );
//   setImage(manipResult);
// };

  let handleConfirm  = async () => {
    // compressImage();
    let receiptResponse;
    const data = new FormData();
    data.append('api_key', 'TEST');
    data.append('recognizer', 'US');
    data.append('ref_no', 'chris_testing_12345');
    data.append('file', { uri: photo.uri, name: filename, type: 'image/jpg' });

    let localUri = photo.uri;
    let filename = localUri.split('/').pop();

    console.log("LOCAL URI: ", localUri);
    console.log("LOCAL FILENAME: ", filename);
    

    // Call asprise API
    console.log("CALLING FETCHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHS")
    let theResponse = await fetch('https://ocr.asprise.com/api/v1/receipt', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: data,
    })
    .then(response => {return response.json()})
    .then(result => console.log("SUCCESS: ", JSON.stringify(result)))
        .catch((error) => {
        console.log('ERRRRORORRRRR: ', JSON.stringify(error));
    })

    console.log("THE THE THE RESPONSE: ", JSON.stringify(theResponse));

    // await request.post({
    //     url: 'https://ocr.asprise.com/api/v1/receipt',
    //     formData: {
    //       api_key: 'TEST',        // Use 'TEST' for testing purpose
    //       recognizer: 'US',        // can be 'US', 'CA', 'JP', 'SG' or 'auto'
    //       ref_no: 'ocr_nodejs_123', // optional caller provided ref code
    //     //   file: photo.uri // the image file
    //     file: "data:image/jpg;base64," + photo.base64
    //     },
    //   }, function(error, response, body) {
    //     if(error) {
    //       console.error(error);
    //     }
    //     receiptResponse = JSON.parse(body);
    //     console.log("RESPONSEEEE: ", receiptResponse);
    //   });
    // Navigate to next page (Tax Page)
    navigation.navigate("Tax", { theResponse })
  };

  let takePic = async () => {
    let options = {
        quality: 0,
        base64: true,
        exif: false
      };

    let newPhoto = await this.camera.takePictureAsync(options);
    //USE THE URI FOR API CALL
    // https://asprise.com/ocr/api/docs/html/receipt-ocr.html
    console.log("NEW PHOTO URI!!!!!!:" + newPhoto.uri);

    setPhoto(newPhoto);
  };

  if(photo) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
            <Button
            title="Confirm"
            onPress={handleConfirm}
        />
        </SafeAreaView>
    )
  }

//   function toggleCameraType() {
//     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//   }

  return (
      <Camera style={styles.container} ref={(ref) => { this.camera = ref }}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={takePic}>
                <Text>Scan</Text>
            </TouchableOpacity>
        </View>
      </Camera>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#fff',
        alignSelf: 'flex-end'
    },
    preview: {
        alignSelf: 'stretch',
        flex: 1
      }
})