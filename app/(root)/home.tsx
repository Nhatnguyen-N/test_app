import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/header";
import { BlurView } from "@react-native-community/blur";
import { travel, travelEN } from "@/Data/TravelData";
import TravelCard from "@/components/travelCard";
import InputField from "@/components/inputField";
import CustomButton from "@/components/customButton";
import Contact from "@/components/contact";
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import { travelItemParams } from "@/types/type";
import { setTravel } from "@/redux/TravelReducer";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("home");
  const HandleSetTravel = (item: travelItemParams) => {
    dispatch(setTravel(item));
    router.push(`/(root)/about`);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      style={{ flex: 1 }}
    >
      <StatusBar hidden={false} backgroundColor={"#ffff"} />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={i18n.language === "vi" ? travel : travelEN}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TravelCard
              handlePress={() => HandleSetTravel(item)}
              description={item.description}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          )}
          ListHeaderComponent={() => (
            <>
              <View>
                <Header />
                <View
                  style={{
                    marginHorizontal: 7,
                    marginVertical: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      textAlign: "center",
                      fontWeight: "500",
                      lineHeight: 28,
                    }}
                  >
                    {t("IntroduceApp")}
                  </Text>

                  <CustomButton
                    title={t("Explore")}
                    handlePress={() => {}}
                    containerStyles={{
                      width: "40%",
                      marginVertical: 10,
                    }}
                    textStyles={{ fontWeight: "bold", color: "#ffff" }}
                  />
                </View>
                <View style={{ marginHorizontal: 7 }}>
                  <Text
                    style={{ fontSize: 25, color: "#ffff", fontWeight: "bold" }}
                  >
                    {t("Recent")}
                  </Text>
                </View>
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <>
              <View
                style={{
                  marginHorizontal: 7,
                  // width: "100%",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <InputField label={t("Name")} labelStyle={{ color: "white" }} />
                <InputField label="Email" labelStyle={{ color: "white" }} />
                <InputField
                  label={t("Content")}
                  labelStyle={{ color: "white" }}
                />

                <CustomButton
                  title={t("Send")}
                  handlePress={() => {}}
                  containerStyles={{
                    margin: 15,
                  }}
                />
              </View>
              <View>
                <Contact />
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
