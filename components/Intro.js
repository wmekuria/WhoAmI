import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { EmojiPickerView } from "./views/EmojiPicker";
import { ChatView } from "./views/Chat";
const pubnub = new PubNub({
  subscribeKey: "pub-c-a98d7b09-3d5b-48e6-bd3a-dc2ad8dd45d6",
  publishKey: "pub-c-a98d7b09-3d5b-48e6-bd3a-dc2ad8dd45d6"
});
console.disableYellowBox = true;
const Stack = createStackNavigator();
export default function Intro() {
  return (
    <NavigationContainer>
      <PubNubProvider client={pubnub}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="EmojiPicker" component={EmojiPickerView} />
          <Stack.Screen name="Chat" component={ChatView} />
        </Stack.Navigator>
      </PubNubProvider>
    </NavigationContainer>
  );}
