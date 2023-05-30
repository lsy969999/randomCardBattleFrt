
import React from "react";
import { Text, View, NativeModules, Button } from "react-native";

function DebugMain(): JSX.Element{
    const {SampleModule} = NativeModules;
    const testOnPress = async (name: any )=> {
        let eventid;
        try{
          eventid = await SampleModule.sampleCall(name);
        } catch (e){
          console.error(e)
        }
        console.log('eventID: ', eventid);
      }
    return (
        <View>
            <Text>s</Text>
            <Button title="moduleTest" onPress={()=>testOnPress('21')}></Button>
        </View>
    )
}

export default DebugMain;