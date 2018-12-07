import React from 'react';
import { Text } from 'react-native';
import styles from '../stylesheets/styles';

const Field = ({text}) => (
		<Text style={styles.subheader}>{ text }</Text>
);

export default Field;