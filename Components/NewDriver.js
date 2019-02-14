import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput,FlatList} from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import HandleBack from './back'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
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
    this.state = {
      dataSource:[],
      isLoading:true
    }
  }
  renderItem = ({item}) => {
    return(
      <View style={styles.main}>
       
       
          
        <TouchableOpacity style={{flex:1,flexDirection:'row',marginBottom:3}}
         onPress={() => this.props.navigation.push("Lists")}>

        <View style={styles.mainView}>
          <View style={styles.textView}>
          <Text style={styles.textStyle}>DriverId</Text>
          <Text style = {styles.textViewss}>6854231</Text>
          </View>
          <View style={styles.textView1}>
          <Text style={styles.textStyle1}>Driver Name</Text>
          <Text style = {styles.textViewsss}>Sumeet Vyas</Text>
          </View>
          <Image source={require('../images/defualt.png')} style={styles.cardItem}></Image>
          <Image source={require('../images/driverIdImage.png')} style={styles.cardItem1}></Image>
          <Image source={require('../images/Drivername.png')} style={styles.cardItem2}></Image>
        </View>
        <View>
        
        </View>
       </TouchableOpacity>
      </View>
    )

  }
  renderSeprator = () => {
    return (
      <View style={{height:1,width:'100%',backgroundColor:'black'}}>

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
  render(){
    const { editing } = this.state;
    return(
      <HandleBack onBack={this.onBack}>
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
    </HandleBack>
    );
}

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'

  },
  main:{
    flex:1,
    flexDirection:'row',
    height:130,
    margin:10,
    position:'relative',
    //overtflow:'visible'
  },
  mainView:{
    height:130,
    width:'100%',
    //margin:10,
    flexDirection:'column',
    backgroundColor:'orange',
    justifyContent:'space-between',
  },
  textView:{
    height:65,
    width:'100%',
    backgroundColor:'#dbe6ef',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:16,
    textAlignVertical:'center'
  },
  textView1:{
    height:65,
    width:'100%',
    flexDirection:'row',
    backgroundColor:'green',
    textAlign:'center',
    justifyContent:'space-between',
    alignItems:'center',
    
    textAlignVertical:'center'

  },
  cardItem: {
    backgroundColor: "#3c4252",
    borderRadius: 3,
    position: "absolute",
    top: 23,
    marginLeft:10,
    width: 80,
    height: 80,
    //paddingLeft: 10,
  },
  cardItem1:{
   
    
    position: "absolute",
    top: 18,
    marginLeft:100,
    width: 30,
    height: 30,

  },
  cardItem2:{
    
    
    position: "absolute",
    top: 82,
    marginLeft:100,
    width: 30,
    height: 30,

  },
  textStyle:{
    color:'black',
    fontWeight:'500',
    alignItems:'center',
    fontSize:14,
    marginLeft:140
  },
  textStyle1:{
    color:'white',
    fontWeight:'500',
    alignItems:'center',
    fontSize:14,
    marginLeft:140
  },
  textViewss:{
    fontSize:12,
    borderColor:'black',
    color:'black',
    borderWidth:2,
    alignItems:'center',
    textAlign:'center',
    borderRadius:5,
    height:30,
    width:115,
    textAlignVertical:'center',
    marginRight:5
  },
  textViewsss:{
    fontSize:12,
    borderColor:'white',
    color:'white',
    borderWidth:2,
    alignItems:'center',
    textAlign:'center',
    borderRadius:5,
    height:30,
    width:115,
    textAlignVertical:'center',
    marginRight:5
  }
})