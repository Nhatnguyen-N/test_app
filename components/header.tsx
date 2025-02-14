import { View, Text, Pressable } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  isSelected: boolean;
}

const Header = () => {
  const { i18n } = useTranslation();
  const currentLng = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 7,
        paddingVertical: 10,
        // backgroundColor: "#ffff",
      }}
    >
      <View style={{}}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "#FF9c01",
          }}
        >
          Travel Test
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderRadius: 50,
          padding: 10,
          alignItems: "center",
          borderColor: "#FF9c01",
          height: 50,
        }}
      >
        <Pressable
          style={
            currentLng === "vi"
              ? {
                  backgroundColor: "#FF9c01",
                  height: "100%",
                  borderRadius: 9999,
                }
              : {}
          }
          onPress={() => changeLanguage("vi")}
        >
          <Text style={{ color: "#FF9c01", fontSize: 18, fontWeight: "500" }}>
            VN
          </Text>
        </Pressable>
        <Text style={{ color: "#FF9c01", marginHorizontal: 5 }}>|</Text>
        <Pressable
          style={currentLng === "en" ? { backgroundColor: "#FF9c01" } : {}}
          onPress={() => changeLanguage("en")}
        >
          <Text style={{ color: "#FF9c01", fontSize: 18, fontWeight: "500" }}>
            EN
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
