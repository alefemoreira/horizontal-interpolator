import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";

import First from "./pages/First";
import Second from "./pages/Second";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <AppStack.Screen name="First" component={First} />
        <AppStack.Screen name="Second" component={Second} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
