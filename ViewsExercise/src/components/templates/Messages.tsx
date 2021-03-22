import React, { 
  Component 
} from 'react';

import { 
  Image, 
  View, 
  StyleSheet,
  Text
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { TextInput } from "react-native";
import { Button, Input, Icon } from 'native-base';
import { Header } from 'react-native/Libraries/NewAppScreen';


const style = StyleSheet.create({
  container: {
    borderWidth: 1, 
    borderColor: 'black', 
    borderTopLeftRadius: 0, 
    borderStyle:'solid',
    backgroundColor: '#16202a'
  },
  header: { 
    height:60
  },
  body: {
    //borderWidth: 1, 
    // borderColor: 'black', 
    // borderTopLeftRadius: 0, 
    // borderStyle:'solid',
    height: 680,
    backgroundColor: '#10171f'
  },
  footer: {
    backgroundColor: '#16202a',
    height: 75,
  },
  menu_img: {
    margin: 15,
    height: 36,
    width:36
  },
  mail_img: {
    height: 36,
    width:36
  }
});

class Messages extends React.Component {
  render() {
    return(
      <>
        <View style={style.container}>
          <View style={style.header}>
            <Row>
              <Col style={{width: 20}}>
                <Image style={style.menu_img} source={require('../../assets/images/menu.png')}/>
              </Col>
              <Col>
                <Text style={{
                  marginLeft: 70,
                  marginTop: 18, 
                  color: '#f9fdfe', 
                  fontWeight:'bold',
                  fontSize:20 }}>Сообщения</Text>
              </Col>
            </Row>
          </View>
          <View style={style.body}>
            <Text style={{
              textAlign: 'center', 
              marginTop: 200, 
              fontSize: 25, 
              fontWeight: 'bold', 
              color: 'white' }}>
                Отправляйте и получайте сообщения
              </Text>
            <Text style={{
              width: 350,
              marginLeft: 30,
              textAlign: 'center',
              textAlignVertical: 'center',
              marginTop: 30, 
              fontSize: 20, 
              color: '#8b99a2'}}>
                Личные сообщения - это приватная переписка в Твиттере. 
                В них можно делиться твитами, медиафайлами и другим контентом.
            </Text>
            <Button rounded style={{
              backgroundColor: '#1ea1f3',
              marginLeft: 105,
              marginTop: 30,
              width: 200, 
              height: 40, 
              alignItems: 'center'}}>
              <Text style={{
                color: '#ecfeff', 
                fontWeight: 'bold', 
                marginLeft: 30}}>
                  Написать сообщение
              </Text>
            </Button>
            <Button rounded style={{
              marginTop: 130,
              marginLeft: 330,
              height: 60,
              width: 60,
              backgroundColor: '#1ea1f3',
              borderRadius: 150, 
              borderStyle:'solid',
              }}>
              <Image 
              style={style.menu_img}
              source={require('../../assets/images/envelope.png')}/>
            </Button>
          </View>
        </View>
        <View style={style.footer}>
          <Row>
            <Col>
              <Image 
                style={{height: 36, width:36, marginTop: 10, marginLeft: 10}}
                source={require('../../assets/images/birdhouse.png')}/>
            </Col>
            <Col>
              <Image 
                style={{height: 24, width:24, marginTop: 20}}
                source={require('../../assets/images/loupe.png')}/>
            </Col>
            <Col>
              <Image 
                style={{height: 24, width:24, marginTop: 20}}
                source={require('../../assets/images/notification.png')}/>
            </Col>
            <Col>
              <Image 
                style={{height: 24, width:24, marginTop: 20}}
                source={require('../../assets/images/email.png')}/>
            </Col>
          </Row>
        </View>
      </>
    );
  }
}

export default Messages;