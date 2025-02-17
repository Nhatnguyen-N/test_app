import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Header from "@/components/header";
import Contact from "@/components/contact";
import { useTranslation } from "react-i18next";
import Swiper from "react-native-swiper";
import { TravelItem, travelItemParams } from "@/types/type";
type Props = {};

const About = (props: Props) => {
  const travel: travelItemParams = useSelector(
    (state: any) => state.travel.travel
  );
  const swiperRef = useRef<Swiper>(null);

  const { t } = useTranslation("about");
  return (
    <View
      style={[
        Platform.OS === "ios" ? { paddingTop: 24 } : { paddingTop: 0 },
        { flex: 1, backgroundColor: "#000" },
      ]}
    >
      <ScrollView>
        <Header />
        <View style={{ flex: 1 }}>
          <Swiper
            ref={swiperRef}
            loop={false}
            dot={
              <View
                style={{
                  width: 5,
                  height: 5,
                  marginHorizontal: 5,
                  backgroundColor: "#E2E8F0",
                  borderRadius: 50,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  width: 15,
                  height: 5,
                  marginHorizontal: 5,
                  backgroundColor: "#0286FF",
                  borderRadius: 50,
                }}
              />
            }
          >
            {travel.images.map((item) => (
              <View
                key={item.id}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  backgroundColor: "red",
                }}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
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
    </View>
  );
};

export default About;
