import * as React from "react";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import Toggle from "react-native-toggle-input";
import DropdownField from "../components/input/DropdownField";
registerTranslation("en", en);

export default function Assistance({ navigation }) {
  const [toggle, setToggle] = React.useState(false);
  const [isSpecialAssistanceOn, setIsSpecialAssistanceOn] = useState(false);
  const [isVisualImpairmentOn, setIsVisualImpairmentOn] = useState(false);
  const [isHearingImpairmentOn, setIsHearingImpairmentOn] = useState(false);
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Assistance</Text>
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
            Please be informed that a request for special assistance is not
            available on the flight. You may request special assistance on the
            website of the operating flight carrier.
          </Text>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderColor: "#f5f5f5",
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            width: 320,
            alignSelf: "center",
            backgroundColor: "#f5f5f5",
            padding: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 18 }}>Special assistance</Text>

            <Toggle
              color={"#4C0259"}
              toggle={isSpecialAssistanceOn}
              setToggle={(isOn) => setIsSpecialAssistanceOn(isOn)}
            />
          </View>

          {isSpecialAssistanceOn && (
            <View style={{ marginTop: 15 }}>
              <DropdownField
                list={[
                  {
                    label: "Wheelchair (All the way to seat)",
                    value: "all",
                  },
                  {
                    label: "Wheelchair (For ramp)",
                    value: "ramp",
                  },
                  {
                    label: "Wheelchair (Up and down steps)",
                    value: "upDown",
                  },
                ]}
                value="all"
              />
            </View>
          )}
        </View>
        <View
          style={{
            borderRadius: 10,
            borderColor: "#f5f5f5",
            borderWidth: 1,
            marginTop: 10,
            marginBottom: 10,
            width: 320,
            alignSelf: "center",
            backgroundColor: "#f5f5f5",
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, marginRight: 10 }}>
            Passenger with visual impairment
          </Text>

          <Toggle
            color={"#4C0259"}
            toggle={isVisualImpairmentOn}
            setToggle={(isOn) => setIsVisualImpairmentOn(isOn)}
          />
        </View>
        <View></View>
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
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18 }}>
            Passenger with hearing impairment
          </Text>

          <Toggle
            color={"#4C0259"}
            toggle={isHearingImpairmentOn}
            setToggle={(isOn) => setIsHearingImpairmentOn(isOn)}
          />
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
              Total for assistance:
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
