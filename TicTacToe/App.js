/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button } from 'react-native';
import Circle from './Circle';
import Cross from './Cross'
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
			currentPlayer: 1
		};
	}
	componentDidMount = () => {
		this.initalizeGame();
	};
	initalizeGame() {
		this.setState({ gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], currentPlayer: 1 });
	}
	onTilePress(row, col) {
		//do not allow tiles to change
		let value = this.state.gameState[row][col];
		if (value !== 0) {
			return;
		}
		let currentPlayer = this.state.currentPlayer;
		let arr = this.state.gameState;
		arr[row][col] = currentPlayer;
		this.setState({ gameState: arr });
		let nextPlayer = currentPlayer === 1 ? -1 : 1;
		this.setState({ currentPlayer: nextPlayer });
		let winner = this.getWinner(row, col);
		if (winner === 1) {
			Alert.alert('Player 1 won');
		} else if (winner === -1) {
			Alert.alert('Player 2 won');
		}
	}
	getWinner(row, col) {
		let sum = 0;
		let arr = this.state.gameState;
		//check rows
		for (let i = 0; i < 3; i++) {
			sum = arr[i][0] + arr[i][1] + arr[i][2];
			if (sum === 3) {
				return 1;
			} else if (sum === -3) {
				return -1;
			}
		}
		//check columns
		for (let i = 0; i < 3; i++) {
			sum = arr[0][i] + arr[1][i] + arr[2][i];
			if (sum === 3) {
				return 1;
			} else if (sum === -3) {
				return -1;
			}
		}
		//check diagonals

		sum = arr[0][0] + arr[1][1] + arr[2][2];
		if (sum === 3) {
			return 1;
		} else if (sum === -3) {
			return -1;
		}
		sum = arr[0][2] + arr[1][1] + arr[2][0];
		if (sum === 3) {
			return 1;
		} else if (sum === -3) {
			return -1;
		}
		//no winner
		return 0;
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(0, 0);
						}}
					>
						{this.renderIcon(0, 0)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(0, 1);
						}}
					>
						{this.renderIcon(0, 1)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(0, 2);
						}}
					>
						{this.renderIcon(0, 2)}
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(1, 0);
						}}
					>
						{this.renderIcon(1, 0)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(1, 1);
						}}
					>
						{this.renderIcon(1, 1)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(1, 2);
						}}
					>
						{this.renderIcon(1, 2)}
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(2, 0);
						}}
					>
						{this.renderIcon(2, 0)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(2, 1);
						}}
					>
						{this.renderIcon(2, 1)}
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.tiles}
						onPress={() => {
							this.onTilePress(2, 2);
						}}
					>
						{this.renderIcon(2, 2)}
					</TouchableOpacity>
				</View>
				<View style={{ marginTop: 60 }}>
					<Button title={'NEW GAME'} onPress={() => this.initalizeGame()} />
				</View>
			</View>
		);
	}
	renderIcon(row, col) {
		let value = this.state.gameState[row][col];
		switch (value) {
			case 1:
				return <Cross  />;

			case -1:
				return <Circle />;

			default:
				return <View />;
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tiles: {
		borderWidth: 2,
		width: 90,
		height: 90,
		borderColor: 'white'
	}
});
