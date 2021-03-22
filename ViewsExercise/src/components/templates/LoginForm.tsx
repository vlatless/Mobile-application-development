import React from 'react';

import { 
  Image, 
  View, 
  StyleSheet,
  Text
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
import { TextInput } from "react-native";
import { Button } from 'native-base';


const style = StyleSheet.create({
  container: {
    height: 2000,
    marginTop: 30,
    marginLeft: 10,
    flexDirection:"column", 
    maxHeight:100
  },
  header: {
    flexDirection:"row", 
    height:100
  },
  body: {
    marginTop: 150
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
  submit: {
    height: 60,
    marginLeft: 25,
    marginTop: 30,
    margin: 12,
    width: 320
  }
});

class LoginForm extends React.Component {
  render() {
    return(
      <>
        <View style={style.container} >
          <View style={style.header}>
            <Grid>
              <Row>
                <Col>
                  <Image style={style.close_icon}source={require('../../assets/images/close.png')}/>
                </Col>
              </Row>
            </Grid>
          </View>
          <View style={style.body}>
            <Text style={{
              maxWidth: 320,
              marginLeft: 25,
              fontSize: 30, 
              fontWeight: 'bold', 
            }}>войти или зарегестрироваться</Text>
            <Text style={{
              maxWidth: 320,
              marginTop: 10,
              marginLeft: 25,
              fontSize: 16.5,
              fontWeight: '500'
            }}>
              Мы отправим на номер SMS-сообщение
              с кодом подтверждения
            </Text>
            <TextInput 
              style={style.input_phone}
              placeholder="+ 7 (_ _ _) _ _ _ -_ _-_ _"
              keyboardType='phone-pad'/>
          </View>
          <Button dark style={style.submit}><Text style={{marginLeft: 100, color: '#f4f4f4', fontFamily:'roboto' }}>ПОЛУЧИТЬ КОД</Text></Button>
        </View>
      </>
    );
  }
}

export default LoginForm;