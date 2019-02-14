import React ,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native'
import {Icon,Button,Container,Header,Content,Left} from 'native-base'
export default class HistoryRequest extends Component{
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
             title:'History'
                
            
        }
    }
    constructor(){
      
        super()
        this.state = {
          dataSource:[],
          isLoading:true
        }
      }
      renderItem = (item) => {
          return(
              <View style = {styles.mainView}>
                <View style = {styles.ImageView}>
                <Image source={require('../images/defualt.png')} style = {{width:70,height:70}} />
                </View>
                <View style = {styles.TextView}>
                    <View style={styles.underView}>
                    <Text style={styles.TextFont}>Driver Id</Text>
                    <Text style ={styles.TextFont}>Driver Name</Text>
                    <Text style ={styles.TextFont}>BinId</Text>
                    <Text style ={styles.TextFont}>Date</Text>
                    <Text style={styles.TextStatus}>Status Of Request</Text>

                    </View>
                </View>
                <View style={styles.anotherView}>
                <Text style={styles.anotherFont}>55425</Text>
                <Text style={styles.anotherFont1}>Piyush</Text>
                <Text style={styles.anotherFont2}>45454</Text>
                <Text style={styles.anotherFont3}>1/6/8</Text>
                <View style={styles.anotherImageView}>
                
                <Image source={require('../images/Closed.png')} style = {{width:30,height:30}} />
                </View>
                <View style={styles.anotherImageView1}>
                    
                    <Text style={styles.pendingFont}>Closed</Text>
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
    mainView:{
        backgroundColor:'#dbe6ef',
        height:210,
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    ImageView:{
        height:100,
        marginTop:10,
        marginLeft:5,
        flex:0.2
    },
    TextView:{
        height:190,
        //marginLeft:10,
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0)',
        flex:0.4
    },
    underView:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:190,
        backgroundColor:'rgba(0,0,0,0)',
    },
    TextFont:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        //textAlignVertical:'center',

    },
    TextStatus:{
        backgroundColor:'black',
        //borderWidth:2,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        height:25,
        marginRight:10,
        marginBottom:10
    },
    anotherView:{
        flex:0.4,
        backgroundColor:'rgba(0,0,0,0)',
        height:210,
        flexDirection:'column',
        marginTop:12,
        marginRight:5
        //justifyContent:'space-between'
    },
    anotherFont:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        marginBottom:5

    },
    anotherFont1:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        marginTop:10

    },
    anotherFont2:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        marginTop:13

    },
    anotherFont3:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        borderWidth:2,
        marginTop:16

    },
    anotherImageView:{
        backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'row',
        height:30,
        justifyContent:'center',
        marginTop:13,
        //marginLeft:3
    },
    anotherImageView1:{
        backgroundColor:'rgba(0,0,0,0)',
        flexDirection:'row',
        height:30,
        justifyContent:'center',
        //marginTop:2
    },
    pendingFont:{
        color:'white',
        fontWeight:'800'
    }
})
