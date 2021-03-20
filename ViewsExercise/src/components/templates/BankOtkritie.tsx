import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class BankOtrkitie extends React.Component {

  render() {
    return(
      <Container>
        <Header/>
        <Content>
          <Card>
            <CardItem cardBody>
              <Body>
                <Image source={require('../assets/images/benefits-team-analyst@2x.png')} />
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default BankOtrkitie;