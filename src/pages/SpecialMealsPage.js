import * as React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import DropdownField from "../components/input/DropdownField";
registerTranslation("en", en);

export default function SpecialMeals({ navigation }) {
  const mealOptions = [
    {
      label: "Vegetarian Asian Meal",
      value: "vam",
    },
    {
      label: "Baby Meal",
      value: "bm",
    },
    {
      label: "Bland Meal",
      value: "blm",
    },
    {
      label: "Child Meal",
      value: "cm",
    },
    {
      label: "Diabetic Meal",
      value: "dm",
    },
    {
      label: "Fruit Platter Meal",
      value: "fpm",
    },
    {
      label: "Gluten Intolerant Meal",
      value: "gim",
    },
    {
      label: "Hindu Meal",
      value: "hm",
    },
    {
      label: "Kosher Meal",
      value: "km",
    },
    {
      label: "Low Calorie Meal",
      value: "lcm",
    },
    {
      label: "Low Fat Meal",
      value: "lfm",
    },
    {
      label: "Low Salt Meal",
      value: "lsm",
    },
    {
      label: "Halaal Meal",
      value: "ham",
    },
    {
      label: "Low Lactose Meal",
      value: "llm",
    },
    {
      label: "Vegetarian Raw Meal",
      value: "vrm",
    },
    {
      label: "Vegetarian Vegan Meal",
      value: "vvm",
    },
    {
      label: "Vegetarian Jain Meal",
      value: "vjm",
    },
    {
      label: "Vegetarian Oriental Meal",
      value: "vom",
    },
  ];
  return (
    <>
      <View style={{ height: "85%", backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Meal</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("ChooseServices")}
          >
            <Image
              source={require("../images/Multiply.png")}
              style={{ height: 25, width: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20 }}>
          <Text>
            Additional requests are processed no later than 24 hours before
            depature. Special meals may not be available depending on the route.
          </Text>
        </View>
        <View
          style={{
            padding: 20,
          }}
        >
          <View style={{ width: 320 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              London - Aktau
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginTop: 5,
                fontWeight: "bold",
                color: "#616161",
              }}
            >
              Ares Prime
            </Text>
            <View style={{ marginTop: 10 }}>
              <DropdownField list={mealOptions} label="Select meal" />
            </View>
          </View>

          <View style={{ width: 320, marginTop: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Aktau - London
            </Text>
            <Text
              style={{
                fontSize: 17,
                marginTop: 5,
                fontWeight: "bold",
                color: "#616161",
              }}
            >
              Ares Prime
            </Text>
            <View style={{ marginTop: 10 }}>
              <DropdownField list={mealOptions} label="Select meal" />
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "15%",
          bottom: 0,
          backgroundColor: "#4C0259",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 160,
            height: 60,
            backgroundColor: "white",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Total for meal:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
              }}
            >
              free
            </Text>
          </View>
        </View>

        <Button
          style={{
            width: 120,
            height: 60,
            backgroundColor: "white",
            borderRadius: 8,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("ChooseServices")}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "800",
            }}
          >
            Save
          </Text>
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
  },
});
