import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IconlyProvider, Home, Notification} from 'react-native-iconly';

import DevicesPanel from '../screens/DevicesPanelScreen';
import DevicePanelScreen from '../screens/DevicePanelScreen';
import ConfigureDevicesScreen from '../screens/ConfigureDevicesScreen';
import DeviceConfigScreen from '../screens/DeviceConfigScreen';

const DeviceStack = createNativeStackNavigator();

const DeviceStackNavigator = ({navigation}) => {
  return (
    <DeviceStack.Navigator headerMode="none">
      <DeviceStack.Screen name="DevicesPanel" component={DevicesPanel} />
      <DeviceStack.Screen name="Device" component={DevicePanelScreen} />
      <DeviceStack.Screen
        name="ConfigureDevices"
        component={ConfigureDevicesScreen}
      />
      <DeviceStack.Screen name="DeviceConfig" component={DeviceConfigScreen} />
    </DeviceStack.Navigator>
  );
};

export default DeviceStackNavigator;