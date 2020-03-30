import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";

export default function First() {
  const navigation = useNavigation();

  function navigateToSecond() {
    navigation.navigate("Second");
  }

  return (
    <View>
      <TouchableOpacity onPress={navigateToSecond}>
        <Text style={{ backgroundColor: "#E02041" }}>Go to second page</Text>
      </TouchableOpacity>
    </View>
  );
}
