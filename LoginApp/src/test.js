import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Test extends Component{
    render(){
        return (
            <Text>Ini komponent test.js: {this.props.cobaData} - {this.props.kota}</Text>
        )
    }
}

export default Test