import React from 'react';

import { 
  Image, 
  View, 
  StyleSheet,
  Text
} from 'react-native';

import { Col, Grid } from "react-native-easy-grid";

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
  },
  wrapper_logo_bank: {
    width: 200,
    height: 80
  },
  phone_icon: {
    width: 30,
    height: 30,
    margin: 30,
    marginLeft: 70
  },
  pair_img: {
    width: 300,
    height: 300,
    alignItems: 'center',
    marginLeft: 40
  }
});

class BankOtrkitie extends React.Component {
  render() {
    return(
      <>
        <View style={style.container} >
          <View style={style.header}>
            <Grid>
              <Col>
                <Image style={style.wrapper_logo_bank} source={require('../../assets/images/Otkr_logo_bank_vert.png')}/>
              </Col>
              <Col/>
              <Col>
                <Image style={style.phone_icon} source={require('../../assets/images/call_me.png')}/>
              </Col>
            </Grid>
          </View>
          <View style={style.body}>
            <Image style={style.pair_img} source={require('../../assets/images/pair.png')}/>
            <Text style={{
              marginLeft: 15, 
              fontSize: 35, 
              fontWeight: 'bold', 
              width: 300 }}>
              Откройте брокерский счёт быстро и удобно.
            </Text>
            <Button style={{
              backgroundColor: '#3ab6ec', 
              width: 350, height: 70, 
              borderRadius: 5, 
              marginLeft: 15, 
              marginTop: 50 }}>
              <Text style={{
                marginLeft: 120,
                color: '#e1feff', 
                fontSize: 15, 
                fontWeight: 'bold' }}> Открыть счёт </Text>
            </Button>
            <Button transparent style={{
              width: 350, 
              height: 70, 
              borderRadius: 5, 
              marginLeft: 15, 
              marginTop: 20 }}>
              <Text style={{
                marginLeft: 130,
                color: '#3ab6ec', 
                fontSize: 15, 
                fontWeight: 'bold'}}> Я уже клиент </Text>
            </Button>
          </View>
        </View>
      </>
    );
  }
}

export default BankOtrkitie;