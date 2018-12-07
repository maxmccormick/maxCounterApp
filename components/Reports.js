import React from 'react';
import { Text, View } from 'react-native';
import styles from '../stylesheets/styles';

const Reports = ({reports}) => (
	<View>
		{reports.map((report, i) => 
         	<Text style={styles.reports} key={ i }>
	     		{`Today at ${report.time.getHours()}:${report.time.getMinutes()}: ${report.new > report.previous ? 'incremented' : 'decremented'} from ${report.previous} to ${report.new}`}
         	</Text>
     	)}
	</View>
);

export default Reports;