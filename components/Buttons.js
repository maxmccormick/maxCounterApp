import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from '../stylesheets/styles';

const Button = ({text, onPress}) => (
	<TouchableHighlight onPress={onPress} style={styles.button}>
		<Text style={styles.label}>{ text }</Text>
	</TouchableHighlight>
);

export default Button;