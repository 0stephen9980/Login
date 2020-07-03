import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Container, Button, Icon, Input, Form, Item, Label } from 'native-base';
import { render } from 'react-dom';

export default class App extends React.Component {
  render(){
    return (    
      <Container style={styles.container}>
            <Form style={{margin: 20}}>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                ></Input>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                ></Input>
              </Item>
              <TouchableOpacity><Text style={styles.forgot}>Forgot Password Click here</Text></TouchableOpacity>
              <Button
              style={{marginTop: 10}}
                full
                rounded
                success
              >
                <TouchableOpacity><Text style={{color: 'white'}}>Login</Text></TouchableOpacity>
              </Button>
              <Button
              style={{marginTop: 20}}
                full
                rounded
                primary
              >
                <TouchableOpacity><Text style={{color: 'white'}}>SignUP</Text></TouchableOpacity>
              </Button>
            </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  forgot:{
    top: 5,
    left: 10,
    margin: 5,
    color: 'blue'
  }
});
