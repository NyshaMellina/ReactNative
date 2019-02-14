import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button,TouchableOpacity,KeyboardAvoidingView,TextInput} from 'react-native';
import {createSwitchNavigator,createAppContainer,createDrawerNavigator} from 'react-navigation';
import DashBoard from './Dashboard'
import VanDriver from '../VanDriver/Dashboard1'
import TestPage from '../MaintainenceEngineer/Dashboard2'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MainClass extends Component {
  render(){
    return(
       <AppContainer />
    );
}

}

class Homes extends Component<Props>{
    render(){
        return(
            <View style={styles.conatiner}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text style={styles.font}>SUPERVISOR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('VanDriver')}>
                    <Text style={styles.font}>VAN DRIVER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('TestPage')}>
                    <Text style={styles.font}>MAINTAINENCE ENGINEER</Text>
                </TouchableOpacity>
            
        </View>
        );
    }
    
}
const SwitchNavigator = createSwitchNavigator({
    Homes:{screen:Homes},
    Dashboard:{screen:DashBoard},
    VanDriver:{screen:VanDriver},
    TestPage:{screen:TestPage}
})
const AppContainer = createAppContainer(SwitchNavigator)

const styles = StyleSheet.create({
    conatiner:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'space-around'
    },
    button:{
        height:40,
        textAlign:'center',
        fontWeight:'bold',
        borderWidth:2,
        color:'white',
        backgroundColor:'blue',
        
        
    },
    font:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        textAlignVertical:'center'
    }
})
