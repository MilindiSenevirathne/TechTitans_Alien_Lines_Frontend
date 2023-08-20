import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Text } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
registerTranslation("en", en);

export default function ExtraBaggage({ navigation }) {
  const [count, setCount] = useState(0);

  const route = useRoute();
  const {selectedSpaceship } = route.params;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const totalAmount = count > 0 ? (count * 89.1).toFixed(2) + " $" : "free";

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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Extra baggage
          </Text>
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
            Need more baggage? Purchase additional baggage in advance with a 30%
            discount.
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderColor: "#f5f5f5",
            borderWidth: 1,
            marginTop: 10,
            width: 320,
            alignSelf: "center",
            backgroundColor: "#f5f5f5",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 8, fontWeight: "bold" }}>
            Aktau - London
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../images/suitcase.png")}
              style={{ height: 30, width: 30 }}
            />
            <Text style={{ fontSize: 16, color: "#616161" }}>
              Rate include:
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Baggage Count:
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16, color: "#616161" }}>
                89.1 $ / 23Kg bag
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity onPress={decrement} disabled={count === 0}>
              <Image
                source={require("../images/minus.png")}
                style={{
                  height: 30,
                  width: 30,
                  opacity: count === 0 ? 0.5 : 1,
                }}
              />
            </TouchableOpacity>

            <Text style={{ marginLeft: 10, marginRight: 10, fontSize: 18 }}>
              {count}
            </Text>
            <TouchableOpacity onPress={increment}>
              <Image
                source={require("../images/plus.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
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
              Total for baggage:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
              }}
            >
              {totalAmount}
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
