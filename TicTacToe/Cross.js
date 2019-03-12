import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, Button,Text } from 'react-native';
export default class Cross extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Text style={{textSize:50,
		alignItems:'center',
		color:'white',
		marginTop:10,
		fontSize:50,
		 transform: [{ rotate: '45deg'}],
		justifyContent:'center',
		alignSelf:'center',}}>+</Text>;
	}
}