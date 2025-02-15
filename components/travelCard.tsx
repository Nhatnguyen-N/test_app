import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

interface TravelProps {
  imageUrl: string;
  title: string;
  description: string;
  handlePress: () => void;
}

const TravelCard = (props: TravelProps) => {
  const { t } = useTranslation("home");
  return (
    <View style={{}}>
      <Pressable
        onPress={props.handlePress}
        style={{
          backgroundColor: "#ffff",
          marginHorizontal: 7,
          marginVertical: 5,
          padding: 0,
          borderRadius: 15,
          overflow: "hidden", // Đảm bảo bo tròn góc ảnh
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: props.imageUrl }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 120,
            }}
          />
        </View>
        <View style={{ padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              {props.title}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "red", fontWeight: "bold" }}>
                {t("More")}
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "#000",
              fontSize: 15,
              fontWeight: "500",
            }}
            numberOfLines={1}
          >
            {props.description}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default TravelCard;
