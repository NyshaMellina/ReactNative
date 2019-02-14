/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TextInput,TouchableOpacity,KeyboardAvoidingView,Alert,AsyncStorage} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';
import DashBoard from './Dashboard'
import { DrawerNavigator } from 'react-navigation';
import Header from './Map'
import Drawer from './Drawer'
//import JoinNav from './Navigation/JoinNav'
import joinComponent from './joinComponent'


import FCM , {FCMEvent,RemoteNotificationResult,WillPresentNotificationResult,NotificationType} from 'react-native-fcm'
import firebase from 'react-native-firebase';

// FCM.on(FCMEvent.Notification,async (notify) => {
//   if(notify.local_notification){
//     //this is for local notification
//   }
//   if(notify.opened_from_tray){
//     //App is resume/open because user clicked banner or tapped app icon
//   }

//   if(Platform.OS === 'android'){
//     switch(notify._notificationType){
//       case NotificationType.Remote:
//         notify.finish(RemoteNotificationResult.NewData)
//       break;
//       case NotificationType.NotificationResponse:
//         notify.finish();
//       break;
//       case NotificationType.WillPresent:
//         notify.finish(WillPresentNotificationResult.All)
//         break;
//     }
//   }

// });

// FCM.on(FCMEvent.RefreshToken, (token) => {
//   console.warn(token)
// });




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Login extends Component<Props> {
//   componentDidMount() {
//     FCM.requestPermissions().then(() =>console.warn('granted')).catch(() => console.log('Ntifications Permission'))
//     FCM.getFCMToken().then(token => {
//       console.warn(token)
//     });
//     this.notificationListner = FCM.on(FCMEvent.Notification,async(notify) => {

//     })
//     FCM.getInitialNotification().then(notify => {
//       console.warn(notify)
//     });
//   }
// // componentWillMount() {
// //   this.notificationListner.remove();
// // }
async componentDidMount() {
  this.checkPermission();
  this.createNotificationListeners(); //add this line
}

componentWillUnmount() {
  this.notificationListener;
  this.notificationOpenedListener;
}

//1
async checkPermission() {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    this.getToken();
  } else {
    this.requestPermission();
  }
}

async createNotificationListeners() {
  /*
  * Triggered when a particular notification has been received in foreground
  * */
  this.notificationListener = firebase.notifications().onNotification((notification) => {
    const { title, body } = notification;
    console.log('onNotification:');
    // this.showAlert(title, body);
    // alert('message');

    const localNotification = new firebase.notifications.Notification({
      sound: 'sampleaudio',
      show_in_foreground: true,
    })
      .setNotificationId(notification.notificationId)
      .setTitle(notification.title)
      // .setSubtitle(notification.subtitle)
      .setBody(notification.body)
      // .setData(notification.data)
      .android.setChannelId('fcm_default_channel') // e.g. the id you chose above
      .android.setSmallIcon('@drawable/ic_launcher') // create this icon in Android Studio
      .android.setColor('#000000') // you can set a color here
      .android.setPriority(firebase.notifications.Android.Priority.High);
      

    firebase.notifications()
      .displayNotification(localNotification)
      .catch(err => console.error(err));
  });

  const channel = new firebase.notifications.Android.Channel('fcm_default_channel', 'Demo app name', firebase.notifications.Android.Importance.High)
      .setDescription('Demo app description')
      .setSound('sampleaudio.mp3');
    firebase.notifications().android.createChannel(channel);

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      console.log('onNotificationOpened:');
      //this.showAlert(title, body);
      alert(title,body)
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      console.log('getInitialNotification:');
      this.showAlert(title, body);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.warn(JSON.stringify(message));
    });
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        console.log('fcmToken:', fcmToken);
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
    console.log('fcmToken:', fcmToken);
    alert(fcmToken)
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.warn('permission rejected');
    }
  }


    render(){
        return(
            <AppContainer />
        );
    }
   
}

class loginScreen extends Component<Props>{
    constructor(props){
        super(props);
        this.state = {
            secureTextEntry:true
        }
    }
    onIconPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        });
    }
    render() {
        return (
          <View style = {styles.container}>
            <View style = {styles.backgroundContainer}>
            <Image source={require('../images/background.jpeg')} style = {styles.background}/>
            </View>
    
            <View style = {styles.header}>
            
            <TouchableOpacity >
              <Image source={require('../images/arrow2.png')}/>
            </TouchableOpacity>
         
          <TouchableOpacity>
            <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>LOGIN</Text>
          </TouchableOpacity>
    
    
         </View>
    
    
    
    
            <View style = {styles.overlay}>
              <Image source={require('../images/logo.png')} style={styles.logo}/>
            </View>
            
            
    
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginForm}>
              <View style = {styles.inputForm}>
              <View style={styles.images}>
              <Image source={require('../images/contact.png')} style = {{width:20,height:20}} />
              <Image source={require('../images/key2.png')} style = {{width:20,height:20}} />
               </View> 
            <View style={styles.textForm}>
            <TextInput style={styles.header1} placeholder="USERNAME" placeholderTextColor="white" returnKeyType="next" onSubmitEditing = {() => this.passwordInput.focus()}></TextInput>
            
            
           
            <View style ={styles.eyeImage}  >
           <TextInput {...this.props} placeholder="PASSWORD" secureTextEntry={this.state.secureTextEntry} placeholderTextColor="white" style={{flex:1,fontSize:14,fontWeight:'bold',height:35,marginTop:10,color:'#fff'}} returnKeyType="go" ref={(input) => this.passwordInput = input}></TextInput>
            <TouchableOpacity onPress={this.onIconPress}>
               <Image source={require('../images/eye.png')} style={styles.eye} />
            </TouchableOpacity>
                
                
            </View>
           
    
    
            <TouchableOpacity style={styles.forget}>
                <Text style={styles.acc}>FORGET PASSWORD?</Text>
            </TouchableOpacity>
             
            </View>
            
    
               
             </View>
    
    
            <View style={styles.buttonBar}>
           <TouchableOpacity style={styles.buttonAlign} onPress={() => this.props.navigation.navigate('joinComponent')}>
         <Text style={styles.textAligns}>LOGIN</Text>
         </TouchableOpacity>
            </View>
    
            <View style={styles.account}>
               <Text style={styles.acc}>
                Don't have an account ?
                </Text>
                <TouchableOpacity style={styles.signButton} >
                    <Text style={styles.acc}>SIGN UP</Text>
                </TouchableOpacity>
    
             </View>
    
         
    
          </View>
    
            
            
            </KeyboardAvoidingView>
        
        
    
           
            
          </View>
         
    
         
    
    
         
        );
      }
}





const AppSwitchNavigator = createSwitchNavigator({
    loginScreen:{screen:loginScreen},
    Dashboard:{screen:DashBoard},
    Header:{screen:Header},
    Drawer:{screen:Drawer},
    joinComponent:{screen:joinComponent}


  });
  
  const AppContainer = createAppContainer(AppSwitchNavigator)



  const styles = StyleSheet.create({
    container:{
     flex:1,
     //justifyContent:'center', 
     backgroundColor:'rgba(0,0,0,0)',
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
     resizeMode:'stretch',
    },
    logo:{
      alignItems:'center',
      width:250,
      height:250,
      margin:'auto',
      backgroundColor:'rgba(0,0,0,0)'
    },
    overlay:{
      //opacity:0.5,
      alignItems:'center',
      position:'absolute',
      left:0,
      top:50,
      right:0,
      margin:'auto',
   
      //transform:'translate(-50,-50)',
   
      backgroundColor:'rgba(0,0,0,0)',
    },
   
    header:{
   
     height:50,
     marginTop:10,
     marginRight:5,
     marginLeft:5,
     backgroundColor:'rgba(0,0,0,0)',
     flexDirection:'row',
     paddingHorizontal:10,
     paddingTop:5,
     paddingBottom:5,
     alignItems:'center',
     justifyContent:'space-between',
     //padding:20,
     //borderBottomWidth:4,
     //borderBottomColor:'#ccc'
   
   },
   cart:{
      width:200,
      height:200,
      alignItems:'flex-end'
      
   },
   
   loginForm:{
     //flex:1,
     justifyContent:'center', 
     backgroundColor:'rgba(0,0,0,0)',
     //alignSelf:'stretch',
     marginTop:200,
     height:250,
     //justifyContent:'space-between'
    
   
   },
   inputForm:{
   
   backgroundColor:'rgba(0,0,0,0)',
   alignSelf:'stretch',
   marginTop:10,
   height:120,
   
   
   flexDirection:'row',
   
   },
   textForm:{
   
   backgroundColor:'rgba(0,0,0,0)',
   alignSelf:'stretch',
   marginTop:10,
   marginRight:30,
   height:120,
   justifyContent:'space-between',
   
   
   },
   images:{
   
   backgroundColor:"rgba(0,0,0,0)",
   marginTop:25,
   height:70,
   marginLeft:50,
   justifyContent:'space-between'
   
   },
   
   
   header1:{
   fontSize:14,
   color:'#fff',
   marginBottom:5,
   borderBottomColor:'#fff',
   borderBottomWidth:2,
   marginLeft:15,
   marginRight:20,
   fontWeight:'bold',
   height:35,
   alignSelf:'stretch',
   paddingBottom:4
   
   },
   buttonBar:{
   justifyContent:'center', 
   backgroundColor:'rgba(0,0,0,0)',
   alignSelf:'stretch',
   marginTop:35,
   height:50,
   
   
   },
   buttonAlign:{
   fontSize:14,
   backgroundColor:'#fff',
   justifyContent:'center',
   height:40,
   marginLeft:50,
   marginRight:40,
   borderRadius:12,
   marginBottom:3
   
   },
   textAligns:{
   fontSize:14,
   justifyContent:'center',
   fontWeight:'bold',
   color:'green',
   textAlign:'center',
   
   
   },
   account:{
   justifyContent:'center',
   backgroundColor:'rgba(0,0,0,0)',
   alignSelf:'stretch',
   marginBottom:1,
   height:20,
   flexDirection:'row'
   },
   acc:{
   fontSize:16,
   color:'#fff',
   fontWeight:'bold',
   textAlign:'center',
   
   },
   signButton:{
   marginLeft:5
   },
   forget:{
   
   backgroundColor:'rgba(0,0,0,0)',
   height:20,
   marginLeft:150,
   marginRight:20,
   marginBottom:7
   
   },
   acc:{
   fontSize:10,
   color:'#fff',
   fontWeight:'bold',
   textAlign:'center',
   
   },
   eyeImage:{
   backgroundColor:"rgba(0,0,0,0)",
   flexDirection:'row',
   justifyContent:'space-between',
   borderBottomWidth:2,
   borderBottomColor:'#fff',
   marginLeft:14,
   marginRight:18,
   height:40
   
   
   },
   eye:{
   backgroundColor:'rgba(0,0,0,0)',
   marginTop:15,
   width:20,
   height:20,
   
   
   }
   
   
   
   
   });
   