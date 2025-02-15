import { View, Text, TouchableOpacity, StyleProp } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

const CustomButton = ({ ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: "#FF9c01",
          borderRadius: 12,
          minHeight: 42,
          justifyContent: "center",
          alignItems: "center",
        },
        props.containerStyles,
      ]}
    >
      <Text
        style={[
          { color: "#161622", fontSize: 20, lineHeight: 28 },
          props.textStyles,
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
