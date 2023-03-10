import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    img: "https://img.tastykitchen.vn/2022/03/28/com-suon-cha-cua-7c0c.jpg",
    name: "Com Tam",
    gia: "10.000KW",
    time: "30~60",
  },
  {
    id: 2,
    img: "https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg",
    name: "Tra Sua",
    gia: "5.000KW",
    time: "30~60",
  },
  {
    id: 3,
    img: "https://p.kindpng.com/picc/s/723-7233345_vietnamese-cuisine-png-pho-png-transparent-png.png",
    name: "Pho",
    gia: "10KW",
    time: "20~40",
  },
  {
    id: 4,
    img: "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg",
    name: "Banh Mi",
    gia: "7000KW",
    time: "20~40",
  },
  {
    id: 5,
    img: "https://quanannhanhbinhminh.files.wordpress.com/2017/04/bun-thit-nuong-chay-ngon.jpg",
    name: "Bun Thit Nuong",
    gia: "10000KW",
    time: "20~40",
  },
  {
    id: 6,
    img: "https://i.ytimg.com/vi/C1P1Cw9J1-I/maxresdefault.jpg",
    name: "Bun Rieu",
    gia: "10000KW",
    time: "20~40",
  },
];

export default function BuyScreen({ navigation, props }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 300, borderWidth: 1 }}>
        <Image
          style={{ height: 300, width: 400 }}
          source={{
            uri: "https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png",
          }}
        />
      </View>

      <View style={{ flex: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="orange" />
            <AntDesign name="star" size={16} color="black" />
          </View>
          <Text>(102k)</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 32, marginLeft: 10 }}>Bun Cha</Text>
          <Text style={{ fontSize: 24, marginRight: 10, color: "red" }}>
            10000KW
          </Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 20 }}>
          <Text style={{ fontSize: 16 }}>
            B??n ch??? l?? m???t m??n ??n c???a Vi???t Nam, bao g???m b??n, ch??? th???t l???n n?????ng
            tr??n than hoa v?? b??t n?????c m???m chua cay m???n ng???t. M??n ??n xu???t x??? t???
            mi???n B???c Vi???t Nam, l?? th??? qu?? c?? s???c s???ng l??u b???n nh???t c???a H??
            N???i,[1] n??n c?? th??? coi ????y l?? m???t trong nh???ng ?????c s???n ?????c tr??ng c???a
            ???m th???c H?? th??nh. B??n ch??? c?? n??t t????ng t??? m??n b??n th???t n?????ng ??? mi???n
            Trung v?? mi???n Nam, nh??ng n?????c m???m pha c?? v??? thanh nh??? h??n.
          </Text>
        </View>
      </View>

      {/* bottom */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            height: 40,
            width: 150,
            borderRadius: 40,
            backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Buy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            height: 40,
            width: 150,
            borderRadius: 40,
            backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
