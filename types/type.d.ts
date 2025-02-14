import { StyleProp, TextInputProps } from "react-native";

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: StyleProp;
  containerStyle?: StyleProp;
  inputStyle?: StyleProp;
  iconStyle?: StyleProp;
  className?: string;
  placeholder?: string;
}
declare interface ButtonProps extends ButtonProps {
  title?: String;
  handlePress: () => void;
  containerStyles?: StyleProp;
  textStyles?: StyleProp;
  isLoading?: boolean | undefined;
}
export interface travelItemParams {
  _id: number;
  imageUrl: string;
  title: string;
  description: string;
}
export interface TravelItem {
  travel: travelItemParams[]
}