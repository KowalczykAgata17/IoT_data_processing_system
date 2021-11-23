import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import AppTitle from '../../components/Title';
import DrawerHeader from '../../components/Drawer_header';

const ProfileScreen = props => {
  return (
    <View style={styles.main}>
      <DrawerHeader
        screen="Profile"
        onPress={() => props.navigation.openDrawer()}
      />
      <View>
        <AppTitle title="Profile" />
      </View>
      <View style={styles.text}>
        <Text>..................</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  logoText: {
    fontSize: 20,
  },
  text: {},
});

export default ProfileScreen;
