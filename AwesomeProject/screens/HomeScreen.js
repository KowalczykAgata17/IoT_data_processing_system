import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/Button_main';
import AppTitle from '../components/Title';

const HomeScreen = props => {
  return (
    <View style={styles.main}>
      <View>
        <AppTitle title="HOME" />
      </View>
      <View style={styles.text}>
        <Text>Tu się mają pokazać wszystkie rzeczy dla usera</Text>
      </View>
      <AppButton
        title="Devices"
        onPress={() => {
          props.navigation.navigate('Devices');
        }}
      />
      <AppButton
        title="Configure devices"
        onPress={() => {
          props.navigation.navigate('ConfigureDevices');
        }}
      />
      <AppButton
        title="Dashboards"
        onPress={() => {
          props.navigation.navigate('Dashboards');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5,
  },
});

export default HomeScreen;