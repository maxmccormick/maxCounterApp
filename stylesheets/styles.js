import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginVertical: 30,
    color: '#5a2961',
    fontSize: 35,
    fontWeight: 'bold',
  },
  image: {
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#5a2961',
    width: 50,
    height: 50,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  label: {
    fontSize: 25,
    color: 'white',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subheader: {
    marginVertical: 10,
    color: '#5a2961',
    fontSize: 30,
    fontWeight: 'bold',
  },
  reports: {
    color: 'black',
    fontSize: 12,
  },
});

export default styles;