import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput,Picker,label,value,ToastAndroid,TouchableHighlight,Dimensions} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import RadioForm ,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button'
import { Toast } from 'native-base';
import NewPickUp from './HisoryRequestVan'
import HandleBack from  '../back'


import Modal from "react-native-modal";

var screen = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var feedback = [
    {label:"Normal",value:0},
    {label:"AbNormal",value:1}
];

type Props = {};
// export default class MainPage extends Component<Props> {
//     render(){
//       return(
//           <App />
//       );
//   }
  
//   }
export default class feedBackForm extends Component<Props> {
    state = {
        isModalVisible: false
      };
     
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    onClick=(value)=>{
      
        if (value.toString() == "1"){
            
            this._toggleModal()
            
        }else{
            // this.setState({
            //     showMe:false
            // })
        }
    }
    state = {
        editing:false,
      };
      onBack = () => {
        if (this.state.editing) {
          Alert.alert(
            "You're still editing!",
            "Are you sure you want to go home with your edits not saved?",
            [
              { text: "Keep Editing", onPress: () => {}, style: "cancel" },
              { text: "Go Home", onPress: () => this.props.navigation.goBack() },
            ],
            { cancelable: false },
          );
          return true;
        }
      
      return false;
      }
    render(){
        const { editing } = this.state;
 
      return(
        <HandleBack onBack={this.onBack}>
       <View style = {styles.container}>
       <View style = {styles.backgroundContainer}>
            <Image source={require('../images/feedback.jpeg')} style = {styles.background}/>
            </View>
           
            <View style={styles.vehicleViewnew}>
            <Image source={require('../images/feedImage.png')} style = {{height:60,width:70}}/>
            <Text style={styles.textContent}>FEEDBACK</Text>
            </View>
            <View style={styles.pickerViewfeed}>
            <RadioForm 
                radio_props={feedback}
                initial={0}
                onPress={(value) => this.onClick(value)}
                buttonSize={10}
                buttonOuterSize={20}
                selectedButtonColor = {'black'}
                selectedLabelColor = {'black'}
                labelColor={'black'}
                labelStyle = {{fontSize:20,}}
                disabled={false}
                formHorizontal={true}
                style={{paddingLeft:55}}
                radioStyle={{paddingRight:20}}
            />
            </View>
      <TouchableOpacity style={styles.ButtonViewfeed} onPress={() => this.props.navigation.push('Lists')}>
            <Text style={styles.textViewfeed}>SUBMIT</Text>
            </TouchableOpacity>

               


        <Modal isVisible={this.state.isModalVisible}
            deviceWidth={screen.width-80}
            deviceHeight={screen.height -100}
          style={{
            justifyContent:'center',
            borderRadius:Platform.ios === 'ios' ? 30:0,
            shadowRadius:10,
            
            //backgroundColor:'white',
           
        }}
        
        >
          <View style={{ flex: 1,  backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'column' }}>
          <View style = {styles.backgroundContainer}>
            <Image source={require('../images/feedAbNormal.png')} style = {styles.background}/>
            </View>
            <View style={styles.vehicleView}>
            <Image source={require('../images/Abnormalicon.png')} style = {{height:60,width:70}}/>
            <Text style={styles.textContent1}>FEEDBACK REVIEW</Text>
            </View>
            <View style={styles.vehicleView1}>
            
            <TextInput style={styles.textView} placeholder="Write your review" placeholderTextColor="black" multiline={true}></TextInput>
            
            
            <View style={styles.pickerView}>
            <Picker
                style={{ width:'100%' }}
                selectedValue={this.state.PickerValue}
                onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}
            >
            <Picker.Item label = "Select an option" value=""/>
            <Picker.Item label ="Html" value= "html"/>
            <Picker.Item label="Javascript" value="java"/>


            </Picker>

            </View>
            <TouchableOpacity style={styles.ButtonView} onPress={this._toggleModal}>
            <Text style={styles.textView1}>SUBMIT</Text>
            </TouchableOpacity>

            </View>

           
          </View>
        </Modal>
           
         </View>
         </HandleBack>


      );
  }
  
  }

//   const switchNavigator = createSwitchNavigator({
//     feedBackForm:{screen:feedBackForm},
//     NewPickUp:{screen:NewPickUp}
  
// })
// const App = createAppContainer(switchNavigator)
  const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'column'
      }, 
      backgroundContainer:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:'rgba(0,0,0,0)'
       },
       background:{
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           width:null,
           height:null,
           backgroundColor:'rgba(0,0,0,0)',
           resizeMode:'cover',
       },
       vehicleViewnew:{
        height:100,
        //width:'100%',
        marginLeft:10,
        marginRight:10,
        marginTop:60,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        justifyContent:'center',
        alignItems:'center'
      },
      textContent:{
        height:35,
        //width:'100%',
        //marginBottom:10,
        color:'black',
        backgroundColor:'rgba(0,0,0,0)',
        textAlign:'center',
        textAlignVertical:'center'
    },
    pickerViewfeed:{
        height:50,
        marginLeft:10,
        marginRight:10,
        marginTop:70,
        backgroundColor:'rgba(255, 255, 255, 0.4)',
        justifyContent:'center'

    },
    ButtonViewfeed:{
        height:50,
        marginLeft:100,
        marginRight:100,
        marginTop:70,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlign:'center',
        textAlignVertical:'center',
        borderWidth:2,
        borderColor:'white',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:16

    },
    textViewfeed:{
        height:40,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        width:'100%',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlignVertical:'center',
        fontSize:16
    },


    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 100,
        marginLeft:60,
        marginRight:60,
        marginTop:30
     },
     text: {
        color: '#3f2949',
        marginTop: 10
     },
     containers:{
        alignItems: 'center',
        backgroundColor: '#ede3f2',
        padding: 100
     },
     vehicleView:{
        height:100,
        //width:'100%',
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent:'center',
        alignItems:'center'
    },
    vehicleView1:{
        height:350,
        //width:'100%',
        marginLeft:10,
        marginRight:10,
        marginTop:60,
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent:'space-around'
    },
    textContent1:{
        height:40,
        //width:'100%',
        marginTop:10,
        color:'black',
        //backgroundColor:'rgba(0,98,177,0.4)',
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'200',
        fontSize:14,
        
    },
    textView:{
        height:100,
        //fontWeight:'200',
        color:'black',
        //textAlign:'center',
        width:'100%',
        backgroundColor:'rgba(0, 98, 177, 0.4)',
        textAlignVertical:'top',
        fontSize:16,
        borderWidth:3,
        borderColor:'white',
        borderRadius:5,
       
    },
    textView1:{
        height:40,
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        width:'100%',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        textAlignVertical:'center',
        fontSize:16
    },
    pickerView:{
        height:50,
        margin:5,
        backgroundColor:'rgba(0, 98, 177, 0.4)',
        borderWidth:3,
        borderColor:'white',
        borderRadius:5,

    },
    ButtonView:{
        height:50,
        marginLeft:100,
        marginRight:100,
        backgroundColor:'rgba(0, 98, 177, 0.4)',
        textAlign:'center',
        textAlignVertical:'center',
        borderWidth:2,
        borderColor:'white',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:16

    },
  })