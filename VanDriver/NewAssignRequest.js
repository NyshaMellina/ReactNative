import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,ScrollView,FlatList,ActivityIndicator,TouchableOpacity,ToastAndroid} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { Toast, Icon } from 'native-base';
import Map from './MapVan'
import Detail from './DetailAcionRequest'
import VehicleReg from './VehicleRegPage'
import startRideMap from './startRideMap'
import feedback from './feedBackForm'
import ProfileScreen from './ProfileScreenVan'
import Reject from './Reject'
//import { start } from 'repl'


type Props = {};
export default class NewPickUp extends Component<Props> {
  render(){
    return(
       
      <AppContainer />
    );
}

}


class Lists extends React.Component{
  //navOptions
  static navigationOptions = ({ navigation }) => {

    // navOptions = navigation;
    // const { params = {} } = navigation.state;
    return{
        headerLeft:
            <TouchableOpacity 
            style={{paddingLeft:10}} onPress={() => navigation.openDrawer()}>
                <Icon
                    name='menu'
                    size={30}
                    
                //color='white'
                />
            </TouchableOpacity> ,
        headerRight:
        <TouchableOpacity style={{paddingRight:10}}>
         <Icon
                    name='settings'
                    size={30}
                    
                //color='white'
                />
        
         </TouchableOpacity> ,
         title:'New PickUp Request',
            
        
    }
}
  constructor(){
      
      super()
      this.state = {
        dataSource:[],
        isLoading:true
      }
    }
    renderItem = ({item}) => {
     
      return (
        
        <View style={styles.mainView}>

        <TouchableOpacity style={{flex:1,flexDirection:'row',marginBottom:3}}
         onPress={() => this.props.navigation.navigate('Detail')}>
          <View style={styles.IconView}>
          <Image source = {require('../images/picId.png')} style = {styles.imageIconView}/>
          <Image source = {require('../images/bin.png')} style = {styles.imageIcon1View}/>
          </View>
          <View style={styles.TextView}>
          <View style={styles.piciconView}>
          <Text style = {styles.textViews}>PickUpId</Text>
          <Text style = {styles.textViews1}>12456</Text>
          <Text style = {styles.textViews}>BinId</Text>
          <Text style = {styles.textViews1}>457896</Text>

          </View>
          <View style={styles.piciconImageView}>
          <Image source = {require('../images/newImagerequest.png')} style = {{height:50,width:60,marginRight:5,marginLeft:13}}/>
          <Text style = {styles.textNew1}>New Request</Text>
          <Text style = {styles.textNew}>12457963</Text>
          </View>
        
          </View>

        </TouchableOpacity>
        </View>
  
      );
   
  
    }
  
    renderSeparator = () => {
      return (
        <View style = {{height:1,width:'100%',backgroundColor:'black'}}>
  
        </View>
      )
    }
    componentDidMount() {
      const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          this.setState({
              dataSource:responseJson.book_array,
              isLoading:false
          })
  
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    render() {
      return (
        
        this.state.isLoading 
        ?
        <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#330066" animating/>
        </View>
        :
        <View style={styles.container}>
        
          <FlatList  style = {{backgroundColor:'#4caf50s'}}
            // data = {[{key:'a'},{key:'b'}]}
            // renderItem={({item}) => <Text>{item.key}</Text>}
            data ={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor = {(item,index) => index}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      );
    }
  
  }

  // const AppCreator = createSwitchNavigator({
  //   Lists:{screen:Lists},
  //   Map:{screen:Map},
  //   Detail:{screen:Detail}
  // })

const AppCreator = createStackNavigator({
  Lists: { screen: Lists },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      title: 'Detail Request',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },
    })
  },
  Map: {
    screen: Map, navigationOptions: () => ({
      title: 'Map',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },
    })
  },
  VehicleReg: {
    screen: VehicleReg, navigationOptions: () => ({
      title: 'Vehicle Registration',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },
    })
  },
  startRideMap: {
    screen: startRideMap,
    navigationOptions: () => ({
      title: 'Start Ride',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },
    })
  },
  feedback: {
    screen: feedback, navigationOptions: () => ({
      title: 'Feedback',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },
    })
  },
  Reject:{screen:Reject,navigationOptions: () => ({
    title: 'Reject Request',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#4f3403',
      elevation: 0,
      showdowOpacity: 0
    },
  })}

})
const DrawerTab = createDrawerNavigator({
  Draw: AppCreator
},
  {
    contentComponent: props => <ProfileScreen {...props} />
  }
)
const AppContainer = createAppContainer(DrawerTab)
  

const styles = StyleSheet.create({
    container:{
     flex:1,
    
     backgroundColor:'black',
     //backgroundColor:'red'
    },
    mainView:{
        //flex:1,
        flexDirection:'row',
        backgroundColor:'#dbe6ef',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        height:130
          },
    IconView:{
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'column',
      margin:5,
      height:100,
      width:30,
      justifyContent:'space-between',
      alignItems:'center'
    },
    PickView:{
      backgroundColor:'rgba(0,0,0,0)',
      //flexDirection:'column',
      //justifyContent:'space-between',
      margin:10,
      height:70,
      width:70
      
    },
    TextView:{
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'row',
      marginLeft:5,
      marginTop:10,
      height:75,
      //width:130,
      flex:1
    },

    imageView:{
      
      height:70,
      width:70
    },
  imageIconView: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 33
  },
  imageIcon1View:{
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },

    textIconStyle:{
      color:'black',
      fontSize:12,
      textAlign:'center'
    },
    textViews:{
      fontSize:12,
      fontWeight:'600',
      //borderColor:'black',
      color:'black',
      //borderWidth:2,
      alignItems:'center',
      textAlign:'center',
     },
     textViews1:{
      fontSize:12,
      borderColor:'green',
      backgroundColor:'green',
      color:'white',
      borderWidth:2,
      alignItems:'center',
      textAlign:'center',
      //marginBottom:5
     },
    piciconView:{
      flex:0.7,
      height:120,
      backgroundColor:'rgba(0,0,0,0)',
      justifyContent:'space-evenly',
    },
    piciconImageView:{
      flex:0.3,
      height:120,
      justifyContent:'space-evenly',
      backgroundColor:'rgba(0,0,0,0)',
      marginLeft:5
    },
    textNew:{
      fontSize:12,
      borderColor:'black',
      color:'white',
      borderWidth:2,
      backgroundColor:'black',
      borderRadius:5,
      //marginTop:5,
      //marginRight:3,
      height:20,
      width:80,
      textAlign:'center',
      //marginLeft:3,
      fontWeight:'bold'

    },
    textNew1:{
      fontSize:12,
      color:'black',
      height:20,
      width:80,
      textAlign:'center',
      fontWeight:'bold'
    }
   
    
   
   });
   