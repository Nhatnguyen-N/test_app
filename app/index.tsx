import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  return <Redirect href={`/(root)/home`} />;
};

export default Home;
