import React, {Component} from 'react';
import {Platform,StyleSheet,Text,View,Image,TouchableHighlight,Dimensions,TextInput} from 'react-native'
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

var screen = Dimensions.get('window');

type Props = {};
export default class AddModal extends Component<Props> {
    constructor(){
        super()
        
    }
    showAddModal = () =>{
        this.ref.myModal.open()
        
    }

    render(){
      return(
        <Modal
            ref = {"myModal"} 
            style={{
            justifyContent:'center',
            borderRadius:Platform.ios === 'ios' ? 30:0,
            shadowRadius:10,
            width:screen.width - 80,
            height:300
        }}
        position='center'
        backdrop={true}
        onClosed={() =>{
            alert("Modal Closed");
        }}
        >
        <Text>New Modal Open </Text>


        </Modal>
      );
  }
  
  }
