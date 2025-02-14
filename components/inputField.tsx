import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
  Keyboard,
  StyleSheet,
} from "react-native";
import React, { useEffect } from "react";
import { InputFieldProps } from "@/types/type";
type Props = {};

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  iconStyle,
  className,
  inputStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ marginHorizontal: 8 }}>
          <Text
            style={[
              { fontSize: 18, lineHeight: 28, marginBottom: 5 },
              labelStyle,
            ]}
          >
            {label}
          </Text>
          <View
            style={[
              {
                flexDirection: "row", // `flex-row`
                justifyContent: "flex-start", // `justify-start`
                alignItems: "center", // `items-center`
                position: "relative", // `relative`
                backgroundColor: "#f5f5f5", // `bg-neutral-100`
                borderRadius: 9999, // `rounded-full`
                borderWidth: 1, // `border`
                borderColor: "#f5f5f5", // `border-neutral-100`
              },
              containerStyle, // Nếu `containerStyle` là một object style
            ]}
          >
            {icon && (
              <Image
                source={icon}
                style={[{ width: 24, height: 24, marginLeft: 16 }, iconStyle]}
              />
            )}
            <TextInput
              style={[
                {
                  borderRadius: 9999,
                  padding: 10,
                  fontSize: 15,
                  flex: 1,
                  textAlign: "left",
                },
                inputStyle,
              ]}
              secureTextEntry={secureTextEntry}
              {...props}
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
