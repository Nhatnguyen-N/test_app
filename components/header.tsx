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
          alignItems: "center",
          borderColor: "#FF9c01",
          height: 50,
          width: 100,
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Pressable
          style={
            currentLng === "vi"
              ? {
                  backgroundColor: "#FF9c01",
                  // height: 50,
                  // width: "45%",
                  padding: 10,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }
              : {
                  padding: 10,
                  borderRadius: 9999,
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
          onPress={() => changeLanguage("vi")}
        >
          <Text
            style={
              currentLng == "vi"
                ? { color: "#000", fontSize: 18, fontWeight: "500" }
                : { color: "#FF9c01", fontSize: 18, fontWeight: "500" }
            }
          >
            VN
          </Text>
        </Pressable>
        <Pressable
          style={
            currentLng === "en"
              ? {
                  backgroundColor: "#FF9c01",
                  padding: 10,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }
              : {
                  padding: 10,
                  borderRadius: 9999,
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
          onPress={() => changeLanguage("en")}
        >
          <Text
            style={
              currentLng == "en"
                ? { color: "#000", fontSize: 18, fontWeight: "500" }
                : { color: "#FF9c01", fontSize: 18, fontWeight: "500" }
            }
          >
            EN
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
