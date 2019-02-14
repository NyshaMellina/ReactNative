import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput,Picker} from 'react-native';

import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import HandleBack from '../back'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// class VehicleRegpage extends Component<Props> {
//     render(){
//       return(
//           <App />
//       );
//   }
  
//   }
  export default class Dashboard extends Component{
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

    constructor(){
      super()
      this.state={
        PickerValue:''
      }  
    };
    clickme=()=>{
        var data = this.state.PickerValue;
        if(data == ""){
            alert("Please select an option");
        }else{
            alert(data);
        }
       
    }
  render(){
    const { editing } = this.state;
 
    return(
        <HandleBack onBack={this.onBack}>
        <View style={styles.container}>
          <View style = {styles.backgroundContainer}>
            <Image source={require('../images/RejectBack.jpeg')} style = {styles.background}/>
            </View>
            <View style={styles.vehicleView}>
            <Image source={require('../images/Reject.png')} style = {{height:60,width:70}}/>
            <Text style={styles.textContent}>REJECT REQUEST</Text>

            

            </View>
            <View style={styles.vehicleView1}>
            
            <TextInput style={styles.textView} placeholder="Write a Reason For Reject" placeholderTextColor="black"></TextInput>
            
            
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
            <TouchableOpacity style={styles.ButtonView} onPress={() => this.props.navigation.push('Lists')}>
            <Text style={styles.textView1}>REJECT RIDE</Text>
            </TouchableOpacity>

            </View>
        </View>
        </HandleBack>
    );
}
}
// const switchNavigator = createSwitchNavigator({
//     Dashboard:{screen:Dashboard},
   
// })
// const App = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'column'
        //justifyContent:'space-around'
    },
    backgroundContainer:{
     position:'absolute',
     top:0,
     bottom:0,
     left:0,
     right:0,
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
        height:300,
        //width:'100%',
        marginLeft:10,
        marginRight:10,
        marginTop:60,
        backgroundColor:'rgba(0,0,0,0)',
        justifyContent:'space-around'
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
        fontSize:16,
        borderWidth:3,
        borderColor:'white',
        borderRadius:5,

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
        // fontWeight:'500',
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

    }
})