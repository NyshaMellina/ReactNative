import React,{Component} from 'react'
import { View,Text,Button,Image,TouchableOpacity,StyleSheet} from 'react-native'
import ImagePicker from 'react-native-image-picker'
const options = {
    title:"myApp",
    takePhotoButtonTitle:'Take photo with your camera',
    choosePhotoFromLibraryButtonTitle:'choose Photo from Library',
  
  }
  
export default class DrawerScreen extends Component {
    constructor(props){
        super(props);
        this.state={
          avatarSource: require('../images/defualtImage.png')
        }
        
    
      }
    
      myFun = () => {
        ImagePicker.showImagePicker(options, (response) => {
         
          console.log('Response' + response)
          if (response.didCancel) {
            console.log("User cnacel Image Picker")
          }
          else if (response.error) {
            console.log("ImagePickererror" + error)
          }
          else {
            let source = { uri: response.uri };
            this.setState({
              avatarSource: source
            })
          }
        });
    
      }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.imageView}>
              <TouchableOpacity style={styles.imageButton} onPress={this.myFun}>
                <Image source={this.state.avatarSource} style={styles.imageButton} >
                </Image>
              </TouchableOpacity>

            </View>
            <View style={styles.userView}>
              <View style={styles.iconView}>
              <Image source={require('./Navigation/icon/user_id.png')} style = {styles.imageiconView}/>
              <Image source={require('./Navigation/icon/role.png')} style = {{marginTop:33,marginLeft:8,marginRight:5}}/>
              <Image source={require('./Navigation/icon/name.png')} style = {{marginTop:33,marginLeft:8,marginRight:5}}/>
              </View>
              <View style={styles.userDetail}>
                <Text style={styles.TextViews}>EMPID</Text>
                <Text style={styles.TextViews}>ROLE</Text>
                <Text style={styles.TextViews}>NAME</Text>
              </View>
            </View>

          </View>

        )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3f51b5'
  },
  imageView:{
    height:130,
    backgroundColor:'rgba(0,0,0,0)',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20
  },
  imageButton:{
    height:128,
    width:128,
    borderRadius:64,
    resizeMode: 'cover'
  },
  userView:{
    flexDirection:'row',
    marginTop:30,
    backgroundColor:'#fff',
    height:350,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'rgba(255, 255, 255, 0.1)',
    
  },
  iconView:{
    marginLeft:10,
    height:310,
    width:40,
    marginTop:20,
    backgroundColor:'rgba(0,0,0,0)'
  },
  userDetail:{
    marginRight:10,
    marginLeft:0,
    height:310,
    width:190,
    marginTop:20,
    backgroundColor:'rgba(0,0,0,0)'
  },
  TextViews:{
    backgroundColor:'rgba(255, 255, 255, 0.4)',
    //opacity:0.6,
    margin:10,
    padding:10,
    fontSize:14,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  imageiconView:{
   marginTop:18,
   marginLeft:8,
   marginRight:5,
   
  }
})