import React ,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    FlatList
} from 'react-native'
import {Icon,container,Header,Content,Left} from 'native-base'
export default class HomeScreen extends Component{
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
             title:'Current Request'
                
            
        }
    }
    constructor(){
      
        super()
        this.state = {
          dataSource:[],
          isLoading:true
        }
      } renderItem = ({item}) => {
        return(
          <View style={{backgroundColor:'#dbe6ef',height:170 ,marginTop:10,marginLeft:5,marginRight:5}}>
          <View style={styles.requestView}>
          <Image source={require('../images/Request-No..png')} style = {{width:30,height:30}}/>
          <Text style={styles.textView}>Request No</Text>
          
          </View>
          <View style={styles.underView}>

          <View style={styles.PickView}>
          <Image source = {require('../images/Layer-1.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Time Raised</Text>
          <Text style = {styles.textViewss}>12/6/8</Text>

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/Layer-3.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Time Assign</Text>
          <Text style = {styles.textViewss}>11/6/12</Text>
          

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/Layer-21.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Duration </Text>
          <Text style = {styles.textViewss}>2 Days </Text>

          </View>
          <View style={styles.PickView}>
          <Image source = {require('../images/Layer-4.png')} style = {styles.imageView}/>
          <Text style = {styles.textIconStyle}>Status</Text>
          <Text style = {styles.textViewss}>Pending</Text>
          </View>


         </View>
           
           
              
    
        
           
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
    render() {
        return (
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
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    requestView:{
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0)',
        height:30,
        margin:10
        //width:'100%'
    },
    textView:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'black',
        borderWidth:2,
        borderBottomColor:'black',
        marginLeft:10,
        width:150,
        textAlign:'center',
        textAlignVertical:'center'
    },
    underView:{
        flex:1,
        height:130,
        flexDirection:'row',
        backgroundColor:'rgba(0,0,0,0)',
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
        margin:10,
        height:40,
        width:40,
        marginLeft:5
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
})