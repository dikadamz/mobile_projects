import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Test from "./src/test";
import TestDua from "./src/test2";

class App extends Component {
  constructor(props){
    super(props)

    console.log('hiiiiii')
    const nama = "Dika"
    this.state = {
      nama: "Dika"
    }
  }

  componentDidMount(){
    console.log('test')
    // console.log(nama) // wrong
    console.log(this.state.nama) // Correct
  }

  // Must have
  render() {
    const a = 1
    console.log(this.state.nama)
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Hello</Text>
        <Test cobaData={this.state.nama} kota="Jakarta" />
        <TestDua data="Ini props dari parent!" kota="Bandung" />
      </View>
    );
  }
}

export default App;
