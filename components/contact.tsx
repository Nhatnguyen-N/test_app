import { View, Text, Image } from "react-native";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <View
      style={{
        marginHorizontal: 7,
      }}
    >
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Thông tin liên hệ
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          nhatnguyen13213@gmail.com
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>+84 376 326 727</Text>
        <Text style={{ fontSize: 15, color: "white" }}>
          12 Nguyễn Văn Bảo phường 4 quận Gò Vấp TP Hồ Chí Minh
        </Text>
        <Text style={{ fontSize: 15, color: "white" }}>Chính Sách Bảo Mật</Text>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 8 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 9999,
            padding: 5,
          }}
        >
          <Image
            source={require("../assets/images/google.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 9999,
            padding: 5,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/images/google.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 9999,
            padding: 5,
          }}
        >
          <Image
            source={require("../assets/images/google.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, margin: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Contact;
