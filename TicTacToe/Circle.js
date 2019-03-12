import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, Button } from 'react-native';
export default class Circle extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <View style={{ width: 30, 
		height: 30,
		 borderWidth: 2,
		 borderColor: 'white' ,
		 borderRadius:15,
		 alignItems:'center',
		 justifyContent:'center',
		 alignSelf:'center',
		 marginTop:25}} />;
	}
}
