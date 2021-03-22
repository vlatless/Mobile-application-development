import React from 'react';

import { 
  Image, 
  View, 
  StyleSheet,
  Text
} from 'react-native';

import { Col, Row } from "react-native-easy-grid";
import { Button } from 'native-base';


const style = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  header: {
    backgroundColor: '#121212',
    maxHeight:50
    
  },
  body: {
    marginTop: 80,
    height:800
  },
  close_icon: {
    height: 20,
    width: 20,
    marginLeft: 350
  },
  input_phone: {
    height: 40,
    margin: 12,
    color: '#c6c6c6',
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6c6',
    marginLeft: 25,
    marginTop: 25,
    maxWidth: 320
  },
  exit: {
    margin: 15,
    height: 36,
    width:36
  },
  arrow: {
    margin: 15,
    height: 36,
    width:36
  },
  row: {
    maxHeight:80, 
    marginLeft: 20
  }
});

class Profile extends React.Component {
  render() {
    return(
      <>
        <View style={style.container} >
        <View style={style.header}>
          <Row>
            <Col style={{width: 20}}>
              <Image style={style.arrow} source={require('../../assets/images/left-arrow.png')}/>
            </Col>
            <Col>
              <Text style={{
                marginLeft: 70,
                marginTop: 18, 
                color: '#f9fdfe', 
                fontWeight:'bold',
                fontSize:20 }}>Профиль</Text>
            </Col>
          </Row>
        </View>
        <View style={style.body}>
          <Image 
          style={{
            alignSelf: 'center'
          }}
          source={require('../../assets/images/avatar.png')}></Image>
          <Text style={{
            color: 'white', 
            fontSize: 20, 
            fontWeight: '300', 
            alignSelf: 'center'}}>Иванов Иван</Text>
          <Button rounded style={{
              marginTop: 50,
              alignSelf: 'center',
              height: 60,
              width: 60,
              backgroundColor: '#1ea1f3',
              borderRadius: 150, 
              borderStyle:'solid',
              }}>
              <Image 
              style={style.exit}
              source={require('../../assets/images/logout.png')}/>
          </Button>
          <Text style={{
            textAlign: 'center',
            width: 100,
            color: '#507cba', 
            fontSize: 15, 
            fontWeight: 'bold', 
            alignSelf: 'center'}}>Выйти из приложения</Text>
            <Row style={style.row}>
              <Col style={{width: 20}}>
                <Button rounded style={{
                  marginTop: 50,
                  height: 60,
                  width: 60,
                  backgroundColor: '#333333',
                  borderRadius: 150, 
                  borderStyle:'solid',
                  }}>
                  <Image 
                  style={style.exit}
                  source={require('../../assets/images/call.png')}/>
                </Button>
              </Col>
              <Col>
                <Text
                style={{
                  marginLeft: 70,
                  marginTop: 66, 
                  color: '#f9fdfe', 
                  fontWeight:'bold',
                  fontSize:20 }}
                >Телефон и e-mail</Text>
              </Col>
            </Row>
            <Row style={style.row}>
              <Col style={{width: 20}}>
                <Button rounded style={{
                  marginTop: 50,
                  height: 60,
                  width: 60,
                  backgroundColor: '#333333',
                  borderRadius: 150, 
                  borderStyle:'solid',
                  }}>
                  <Image 
                  style={style.exit}
                  source={require('../../assets/images/email.png')}/>
                </Button>
              </Col>
              <Col>
                <Text
                style={{
                  marginLeft: 70,
                  marginTop: 66, 
                  color: '#f9fdfe', 
                  fontWeight:'bold',
                  fontSize:20 }}
                >Почтовый адреса</Text>
              </Col>
            </Row>
            <Row style={style.row}>
              <Col style={{width: 20}}>
                <Button rounded style={{
                  marginTop: 50,
                  height: 60,
                  width: 60,
                  backgroundColor: '#333333',
                  borderRadius: 150, 
                  borderStyle:'solid',
                  }}>
                  <Image 
                  style={style.exit}
                  source={require('../../assets/images/files.png')}/>
                </Button>
              </Col>
              <Col>
                <Text
                style={{
                  marginLeft: 70,
                  marginTop: 66, 
                  color: '#f9fdfe', 
                  fontWeight:'bold',
                  fontSize:20 }}
                >Данные о работодателе</Text>
              </Col>
            </Row>
            <Row style={style.row}>
              <Col style={{width: 20}}>
                <Button rounded style={{
                  marginTop: 50,
                  height: 60,
                  width: 60,
                  backgroundColor: '#333333',
                  borderRadius: 150, 
                  borderStyle:'solid',
                  }}>
                  <Image 
                  style={style.exit}
                  source={require('../../assets/images/dollar.png')}/>
                </Button>
              </Col>
              <Col>
                <Text
                style={{
                  marginLeft: 70,
                  marginTop: 66, 
                  color: '#f9fdfe', 
                  fontWeight:'bold',
                  fontSize:20 }}
                >Регион для платежей</Text>
              </Col>
            </Row>        
        </View>
        </View>
      </>
    );
  }
}

export default Profile;