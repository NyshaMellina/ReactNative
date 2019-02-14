import React from "react";
import { AppRegistry, Image, StatusBar,StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Header,
  Body
} from "native-base";

export default class DrawerImage extends React.Component {
  render() {
    return (
<Container>
    <Header>
      <Body>
        <Image 
        
        source={require('../images/logo.png')}></Image>
      </Body>
    </Header>
  </Container>
    );
  }
}
const styles = StyleSheet.create({
    drawerImage:{
      height:50,
      width:50,
      borderRadius:75
    }
  })