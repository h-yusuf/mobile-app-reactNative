import React from 'react';
import BottomTabNavigator from './src';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <BottomTabNavigator />
      <StatusBar style='light' />
    </>
  );
}
