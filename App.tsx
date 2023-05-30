/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  NativeModules,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Config from 'react-native-config';
import { NavigationContainer,  } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme , FAB} from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './views/Main';
import DebugMain from './views/debug/DebugMain';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'dark',
})


type AppStackParamList = {
  Main: undefined;
  DebugMain: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
 

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="DebugMain" component={DebugMain} /> 
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default App;
