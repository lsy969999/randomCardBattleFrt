import { useNavigationContainerRef } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FAB } from '@rneui/base';
import React from 'react';
import { ScrollView, StatusBar, View, Text, Button } from 'react-native';
import Config from 'react-native-config';
type AppStackParamList = {
    Main: undefined;
    DebugMain: undefined;
  };

type Props = NativeStackScreenProps<AppStackParamList>;
function Main({ navigation }: Props): JSX.Element{
    return (
        <View>
            <StatusBar />
            { Config.PROFILE === 'DEV' &&
                <View style={{position: 'absolute', right: 20, top: 20, zIndex: 1}}>
                  <FAB size="small" title={Config.PROFILE} onPress={() => navigation.navigate('DebugMain')}/>
                </View>
            }
            <ScrollView>
                <Text>MAIN!</Text>
                <Text>배너, 이벤트, 덱출시!</Text>
                <Button title="내 덱"></Button>
                <Button title="전투하기"></Button>
                <Button title="길드"></Button>
                <Button title="상점"></Button>
            </ScrollView>
        </View>
    )
}

export default Main;