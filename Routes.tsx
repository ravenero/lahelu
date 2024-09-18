import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

// Screens
import { Splash, Home, Fresh, Trending, Topics, Posts, Notifications, Account } from '@/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator, Header, ScreenWrapper } from '@/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import tabBarOptions from '@/utils/tabBarOptions';
import Colors from '@/utils/Colors';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

enableScreens();

const HomeTab = () => {
  return (
    <ScreenWrapper>
      <Header />
      <TopTab.Navigator screenOptions={tabBarOptions}>
        <TopTab.Screen name="Home" component={Home} />
        <TopTab.Screen name="Fresh" component={Fresh} />
        <TopTab.Screen name="Trending" component={Trending} />
      </TopTab.Navigator>
    </ScreenWrapper>
  );
};

const MainApp = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      tabBar={BottomNavigator}
      sceneContainerStyle={{ backgroundColor: Colors.black }}
      screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="HomeTab" component={HomeTab} />
      <BottomTab.Screen name="Topics" component={Topics} />
      <BottomTab.Screen name="Posts" component={Posts} />
      <BottomTab.Screen name="Notifications" component={Notifications} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
      />
    </Stack.Navigator>
  );
};

export default Routes;
