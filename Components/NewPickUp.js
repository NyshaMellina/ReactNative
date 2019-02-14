import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,ScrollView,FlatList,ActivityIndicator,TouchableOpacity,ToastAndroid} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator,createStackNavigator,SafeAreaView} from 'react-navigation';
import { DrawerNavigator,DrawerActions } from 'react-navigation';
import { Toast, Icon } from 'native-base';
import Map from './Map.js';
import NewDriver from './NewDriver'
import ProfileScreen from './ProfileScreen'

type Props = {};
export default class NewPickUp extends Component<Props> {
  render(){
    return(
       
      <AppContainer />
    );
}

}


class Lists extends React.Component{

  navOptions

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
         onPress={() => this.props.navigation.navigate("Map")}>
          <View style={styles.PickView}>
          <Image source = {require('../images/local-skip-truck-icon.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Pick Up ID</Text>
          <Text style = {styles.textViewss}>1234789</Text>

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/Layer-2.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>ZoneName</Text>
          <Text style = {styles.textViewss}>Ajadnagar</Text>
          

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/map-route-icon-74728-copy.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Route </Text>
          <Text style = {styles.textViewss}>AB road</Text>

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/800px_COLOURBOX15508356-copy1.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>No of Bins</Text>
          <Text style = {styles.textViewss}>5 bins</Text>
          </View>

        </TouchableOpacity>
        </View>
       
      //   <TouchableOpacity style={{flex:1,flexDirection:'row',marginBottom:3}}
      //   onPress={() => ToastAndroid.show(item.book_title,ToastAndroid.SHORT)}>
      //   <Image style = {{width:100,height:100,margin:5}}  source={{ uri: item.image }} />
      //   <View style = {{flex:1,justifyContent:'center',marginLeft:5}}>
      //     <Text  style = {{fontSize:18,color:'green',marginBottom:15}}>{item.book_title}</Text>
      //     <Text style = {{fontSize:16,color:'red'}}>{item.author}</Text>
      //   </View>
      // </TouchableOpacity>
      
  
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
  //   Map:{screen:Map}
  // })
  const AppCreator = createStackNavigator({
    Lists:{screen:Lists},
    
    Map:{screen:Map,
      navigationOptions: () => ({
        title: 'Map',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor: '#4f3403',
          elevation: 0,
          showdowOpacity: 0
        },
    })},
    NewDriver:{
      screen:NewDriver,
      navigationOptions: () => ({
        title: 'Driver',
        headerTintColor: 'white',
        headerStyle:{
          backgroundColor: '#4f3403',
          elevation: 0,
          showdowOpacity: 0
        },
    })
    }
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
        flex:1,
        flexDirection:'row',
        //justifyContent:'space-between',
        backgroundColor:'#dbe6ef',
       
        marginTop:10,
        height:120,
        justifyContent:'space-evenly'
          },
    PickView:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0)',
      flexDirection:'column',
      justifyContent:'space-evenly',
      marginLeft:2,
      marginRight:2,
      height:120,
      //width:80
      
    },
    imageView:{
      justifyContent:'center',
      alignItems:'center',
      height:40,
      width:40,
      marginLeft:20 
    },
    textIconStyle:{
      color:'black',
      fontSize:12,
      textAlign:'center',
      marginBottom:10
    },
    textViewss:{
      fontSize:12,
      borderColor:'black',
      color:'black',
      borderWidth:2,
      alignItems:'center',
      textAlign:'center',
      borderRadius:5
    }
});
   