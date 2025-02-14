import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Header from "@/components/header";
import Contact from "@/components/contact";
import { useTranslation } from "react-i18next";

type Props = {};

const About = (props: Props) => {
  const travel = useSelector((state: any) => state.travel.travel);
  const { t } = useTranslation("about");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView>
        <Header />
        <View style={{ flex: 1 }}>
          <View>
            <Image
              source={{ uri: travel.imageUrl }}
              style={{
                width: "100%",
                height: 500,
              }}
              resizeMode="cover"
            />
          </View>
          <View style={{ marginHorizontal: 7, marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500",
                color: "#fff",
              }}
            >
              {travel.title}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500",
                color: "#fff",
                marginVertical: 7,
              }}
            >
              {t("description")}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#c4c4c4",
                textAlign: "justify",
              }}
            >
              {travel.description}
            </Text>
          </View>
        </View>
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
