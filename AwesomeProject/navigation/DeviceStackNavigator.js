import {useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerHeader from '../components/Drawer_header';
import AddDeviceParentScreen from '../screens/Devices/AddDeviceParent';
import ConfigureDevicesParentScreen from '../screens/Devices/ConfigureDeviceParent';
import DeviceAdditionScreen from '../screens/Devices/DeviceAdditionScreen';
import DeviceConfigScreen from '../screens/Devices/DeviceConfigScreen';
import DevicePanelScreen from '../screens/Devices/DevicePanelScreen';
import DevicesCsv from '../screens/Devices/DevicesCsvScreen';
import DevicesPanel from '../screens/Devices/DevicesPanelScreen';
import DefaultMobileDashboardScreen from '../screens/MobileDashboards/DefaultMobileDashboardScreen';
import OfflineDataDashboardScreen from '../screens/MobileDashboards/OfflineDataDashboardScreen';

const DeviceStack = createStackNavigator();

const DeviceStackNavigator = props => {
  const {colors} = useTheme();
  return (
    <DeviceStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Robot',
        },
        headerTitleAlign: 'center',
      }}>
      <DeviceStack.Screen
        name="DevicesPanel"
        component={DevicesPanel}
        options={{
          headerLeft: () => (
            <DrawerHeader
              onPress={() => props.navigation.openDrawer()}
              screen=""></DrawerHeader>
          ),
        }}
      />
      <DeviceStack.Screen name="Device" component={DevicePanelScreen} />
      <DeviceStack.Screen
        name="ManageDevices"
        component={ConfigureDevicesParentScreen}
      />
      <DeviceStack.Screen name="AddDevice" component={AddDeviceParentScreen} />
      <DeviceStack.Screen
        name="DeviceAddition"
        component={DeviceAdditionScreen}
      />
      <DeviceStack.Screen name="DeviceConfig" component={DeviceConfigScreen} />
      <DeviceStack.Screen name="DevicesCsv" component={DevicesCsv} />
      <DeviceStack.Screen
        name="DefaultMobileDashboard"
        component={DefaultMobileDashboardScreen}
      />
      <DeviceStack.Screen
        name="OfflineDataDashboardScreen"
        component={OfflineDataDashboardScreen}
      />
    </DeviceStack.Navigator>
  );
};

export default DeviceStackNavigator;
