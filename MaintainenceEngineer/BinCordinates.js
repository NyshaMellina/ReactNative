import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import Map from './MapMain'
import HandleBack from '../back'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// export default class Page extends Component<Props> {
//   render(){
//     return(
//      <App />
//     );
// }

// }
export default class TestPage extends Component<Props> {
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
          <View style={styles.container}>
          <View style = {styles.backgroundContainer}>
            <Image source={require('../images/binBackrounMain.png')} style = {styles.background}/>
            </View>
        
        <View style={styles.imageView}>
            <Image source={require('../images/bincoordinate.png')} style = {{height:60,width:70}}/>
            <Text style={styles.textContent}>BIN COORDINATES</Text>
        </View>
        <View style={styles.coordinateView}>
        <Text style={styles.cordiView}>LATITUDE</Text>
        <Text style={styles.cordiView1}>145632556</Text>
        <Text style={styles.cordiView}>LONGITUDE</Text>
        <Text style={styles.cordiView1}>523654256</Text>
        </View>
        <TouchableOpacity onPress = {() => this.props.navigation.push('Map')} style={styles.ButtonViewfeed}>
            <Text style={styles.textViewfeed}>BIN LOCATION</Text>
        </TouchableOpacity>
        </View>
        </HandleBack>
      );
  }
  
  }
//   const Switch = createSwitchNavigator({
//       TestPage:{screen:TestPage},
//       Map:{screen:Map}

//   })
//   const App = createAppContainer(Switch)

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'space-evenly',
        backgroundColor:'rgba(0,0,0,0)',
    },
     backgroundContainer:{
          position:'absolute',
          top:0,
          bottom:0,
          left:0,
          right:0,
          backgroundColor:'rgba(0,0,0,0)',
          
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
         imageView:{
            height:100,
            //width:'100%',
            marginLeft:10,
            marginRight:10,
            marginBottom:60,
            backgroundColor:'rgba(255, 255, 255, 0.4)',
            justifyContent:'center',
            alignItems:'center'
         },
         coordinateView:{
             height:100,
             margin:5,
             backgroundColor:'rgba(255, 255, 255, 0.4)',
             justifyContent:'space-evenly',
             flexDirection:'row',
             //borderWidth:2,
             borderRadius:5,
             borderColor:'white',
             //backgroundColor:'rgba(0,98,177,0.4)'
         },
         ButtonViewfeed:{
            height:50,
            marginLeft:100,
            marginRight:100,
            marginTop:30,
            backgroundColor:'rgba(255, 255, 255, 0.4)',
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
        cordiView:{
            height:35,
            fontWeight:'bold',
            color:'black',
            textAlign:'center',
            textAlignVertical:'center',
           
            backgroundColor:'rgba(255, 255, 255, 0.1)'
        },
        cordiView1:{
            height:35,
            fontWeight:'bold',
            color:'black',
            textAlign:'center',
            textAlignVertical:'center',
            borderWidth:2,
            borderRadius:5,
            borderColor:'white',
            backgroundColor:'rgba(255, 255, 255, 0.1)'
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
})