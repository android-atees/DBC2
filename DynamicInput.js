import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
  TextInput,
  Share,
  SafeAreaView
} from 'react-native';
import {
  Header,
  ListItem,
  Button,
  CheckBox,
  Card,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import Color from '../../Theme/Color';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  setContact,
  setNewFileImport,
  setContactDetails,
  setUrlDetails,
  saveFileToDirectory,
} from '../../Redux/Actions';
import moment from 'moment';
import {isFileValid} from '../../Utils/Validator';
import ActionSheet from 'react-native-actionsheet';
import CardView from 'react-native-cardview';
import { updateContact } from '../../Utils/LocalStorage';
import Input from 'react-native-floating-label-text-input';
import Contacts from 'react-native-contacts';
import { color } from 'react-native-reanimated';

function addContact(props) {

  

  const [firstName,setFirstName]=useState("");
  const [secondName,setSecondName]=useState("");
  const [email,setEmail]=useState("");
  const [company,setCompany]=useState("");
  const [mobile,setMobile]=useState("");
  const [designation,setDesignation]=useState("");


const isEdit = props.route.params ? props.route.params.isEdit : false;
//................................

const printLine = () =>{
  console.log("qwert","CLickinggggggg");
}

const [textInput,setTextInput]=useState([]);
  const [inputData,setInputData]=useState([]);



const addTextInput = (index) => {
  //setTextInput([0]);
  let textInputs = [];
  console.log("qeqeqwe",textInputs+" qwq "+index);
  textInputs.push(<TextInput style={styles.textInput_dymanic}
    onChangeText={(text) => addValues(text, index)} />);
//    setTextInput(textInput);
  }

const removeTextInput = () => {
    let textInput = textInput;
    let inputData = inputData;
    textInput.pop();
    inputData.pop();
//  setTextInput([]);
//  setInputData([]);
  }

const addValues = (text, index) => {
    let dataArray = inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    setInputData(dataArray);
  }
  else {
    dataArray.push({'text':text,'index':index});
    setInputData(dataArray);
  }
  }


const getValues = () => {
  console.log('Data',inputData);
}




//...................................

  
return (

  <SafeAreaView>
    <View>
  <View style= {styles.row_dymanic}>

  <TouchableOpacity
      style={styles.buttonsss}
      onPress={()=>{addTextInput(textInput!=null?textInput:0)}}>
      
  <View style={{flexDirection: 'row'}}>
      <Button
          onPress={addTextInput(textInput!=null?textInput:0)}
          buttonStyle={styles.button}
          icon={<Icon name="plus" size={15} color="#000000"/>}
        />
  
  <Text style={{marginLeft:120,marginTop:13}}>add phone</Text>
            </View>
  </TouchableOpacity>

  
  
  </View>

  {textInput.map((value) => {
          return value
        })}

  </View>
  </SafeAreaView>
  
  );
}

addContact.propTypes = {};

export default addContact;



//..............................

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
},
buttonView: {
flexDirection: 'row'
},
textInput: {
height: 40,
borderColor: 'black', 
borderWidth: 1,
margin: 20
},
row:{
flexDirection: 'row',
justifyContent: 'center'
},





//................................


  conatiner: {
    marginVertical: 20,backgroundColor:Colors.white,height:'100%',paddingHorizontal:10
    // margin: 20,
  },
  selectedImage: {width: 100, height: 100, marginLeft: 8.0},
  selectBtn: {height: 100, width: 100, marginLeft: 8.0},
  attachView: {flexDirection: 'row', alignItems: 'center'},
  filename: {marginLeft: 10},
  savBtn: {
    backgroundColor: Color.primary,
    height: 50,
  },
  scrollView: {
    height: Dimensions.get('window').height - 155,
  },
  label: {
    // height: 30,
    fontSize: 12,
    color: Colors.grey,
  },
  inputContainer: {
   // borderRadius: 6,
   borderWidth:0,
borderBottomWidth:0.5,
borderBottomColor: Colors.grey,
    height: 45,
    marginVertical:5,
    paddingLeft: 7.0,
  },
  inputDescriptionContainer: {
    borderRadius: 10,
    borderColor: Colors.grey,
    height: 45,
    borderWidth: 0.5,
    paddingLeft: 7.0,
    textAlignVertical: 'top',
    alignItems: 'flex-start',
  },
  Text: {
    height: 30,
    fontSize: 17,
    color: Colors.black,
    fontWeight: 'bold',
    marginLeft: 5.0,
    marginTop: 20,
  },
  checkbox: {
    backgroundColor: 'transparent',
  },
  header: {
    backgroundColor: Colors.secondary,
    padding:5,
    marginTop:20,
    // width: '100%',
    // height: 30,
    // marginBottom:-20,
    color: 'white',
  },
  headerTitle: {color: Colors.white, fontSize: 13, fontWeight: 'bold',marginLeft:10},
  pdfDetails: {
    overflow: 'hidden',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  pdfTitles: {
    textAlign: 'center',
    fontSize: 8,
    marginTop: 3,
    color: Colors.grey,
    // width: 100,
  },pdfName:{
marginTop:-20,fontSize:12,color:Colors.grey
  },pdfDate:{ 
    fontSize:12,color:Colors.grey
  },
  pdfBg: {
    height: 50,
    width: 40,
    borderRadius: 5,
    // marginHorizontal: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container_dymanic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView_dymanic: {
  flexDirection: 'row'
  },
  textInput_dymanic: {
  height: 40,
  borderColor: 'black', 
  borderWidth: 1,
  margin: 20
},
row_dymanic:{
  flexDirection: 'column',
  },
  flatList: {marginVertical: 20, marginHorizontal: 5},
  noData: {textAlign: 'center', color: Colors.grey, marginVertical: 20},
  setColorBlack : {
    color: Colors.primary
  },
  button: {
    marginStart:10,
    marginTop:5,
    width: 30,
    height: 30,
    borderRadius: 15,
    right: 0,
    backgroundColor: Colors.white, //IOS
    elevation: 2,
 // Android
  },
  buttonsss: {
    marginTop:10,
    backgroundColor: Color.darkGrey,
    height:40,
    marginBottom:10,
  },
  textInput: {
    height: 40,
    borderColor: 'black', 
    borderWidth: 1,
    margin: 20
  },
});
