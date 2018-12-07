import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import image from './assets/count.jpg';
import Button from './components/Buttons';
import styles from './stylesheets/styles';
import Field from './components/Fields';
import Reports from './components/Reports';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      reports: [],
    };
    this.onPressMinus = this.onPressMinus.bind(this);
    this.onPressPlus = this.onPressPlus.bind(this);
  };

  onPressMinus(){
      if (this.state.count === 0) {
        return;
      }
      let newcount = this.state.count > 0 ? this.state.count - 1 : this.state.count
      let newreport = {time: new Date(), previous: this.state.count, new: newcount }
      this.setState({count: newcount, reports: [newreport].concat(this.state.reports)});
  };

  onPressPlus(){
    if (this.state.count === 10) {
      return;
    }
      let newcount = this.state.count < 10 ? this.state.count + 1 : this.state.count
      let newreport = {time: new Date(), previous: this.state.count, new: newcount }
      this.setState({count: newcount, reports: [newreport].concat(this.state.reports)});
  };

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The Count</Text>
        <Image style={styles.image} source={image} />
        <View style={styles.horizontal}>
          <Button onPress={this.onPressMinus} text='-' />
          <Field text={this.state.count}/>
          <Button onPress={this.onPressPlus} text='+' />
        </View>
        <Text style={styles.subheader}>History</Text>
        <ScrollView>
          <Reports reports={this.state.reports} />
        </ScrollView>
      </View>
    );
  }
}


