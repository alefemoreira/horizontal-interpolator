import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Second() {
  const navigate = useNavigation();

  function navigateBack() {
    navigate.goBack();
  }

  return (
    <View>
      <TouchableOpacity onPress={navigateBack}>
        <Text style={{ backgroundColor: "#E02041" }}>Back to first page</Text>
      </TouchableOpacity>
    </View>
  );
}
