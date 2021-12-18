import React, { Component } from 'react';
import { Text, View, Button, TextInput, Alert, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      word: ' ',
      vowel: 0,
      consonent: 0,
      char_length: 0,
    }
  }

  Analyze = () => {
    let word = this.state.word;
    let consonent = 0;
    let vowel = 0;
    let char_length = 0;

    char_length = word.length;

    for (let i = 0; i <= word.length; i++) {

      if (word[i] == 'a' || word[i] == 'u' || word[i] == 'i' || word[i] == 'o' || word[i] == 'e' || word[i] == 'A' || word[i] == 'U' || word[i] == 'I' || word[i] == 'O' || word[i] == 'E') {
        vowel++;
      }

    }
    consonent = word.length - vowel;

    this.setState({ char_length: char_length, vowel: vowel, consonent: consonent });


  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
          <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
          <TextInput onChangeText={(word) => this.setState({ word })} style={Styles.instructions} placeholder='Write the Word' />
          <Text></Text>
          <Text></Text>
        </View>
        <View style={Styles.container}>
          <Button color="#FF8D33" onPress={this.Analyze} title='Analyze' />
          <Text></Text>
          <Text style={Styles.instructions}>Length of the word: {this.state.char_length}  </Text>
          <Text style={Styles.instructions}>vowel: {this.state.vowel}  </Text>
          <Text style={Styles.instructions}>Consonents: {this.state.consonent}  </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});