import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Card, Text } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import NavBar from "../components/navbar/NavBar";
registerTranslation("en", en);

export default function ChooseServices({ navigation }) {
  return (
    <>
      <View style={{ height: "85%" }}>
        <ScrollView>
          <NavBar isLogged={true} />
          <View style={styles.container}>
            <StatusBar hidden />

            <Text style={styles.mainTitle}>Choose Services</Text>
            <Card style={styles.card}>
              <View style={styles.viewContainer}>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/briefcase.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <Text style={styles.title}>Extra baggage</Text>
                  <Text style={styles.subtitle}>
                    Book MyBaggage Online with 30% Discount
                  </Text>
                </View>
                <View style={{ padding: 20 }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ExtraBaggage")}
                  >
                    <Image
                      source={require("../images/next.png")}
                      style={{ height: 30, width: 30 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewContainer}>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/seat.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <Text style={styles.title}>Seats</Text>
                  <Text style={styles.subtitle}>
                    Choose your favourite place now
                  </Text>
                </View>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/next.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewContainer}>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/cup-of-drink.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <Text style={styles.title}>Special meals</Text>
                  <Text style={styles.subtitle}>
                    Choose a meal based on your needs
                  </Text>
                </View>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/next.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={styles.viewContainer}>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/disabled.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
                <View style={styles.settingContainer}>
                  <Text style={styles.title}>Assistance</Text>
                  <Text style={styles.subtitle}>
                    Need help during the journey?
                  </Text>
                </View>
                <View style={{ padding: 20 }}>
                  <Image
                    source={require("../images/next.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
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
            width: 120,
            height: 60,
            backgroundColor: "white",
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../images/upload.png")}
            style={{ height: 15, width: 15, marginRight: 5 }}
          />
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "800",
              }}
            >
              $645,000
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
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "800",
            }}
          >
            Continue
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
  mainTitle: {
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    padding: 20,
  },
  card: {
    width: 320,
    marginBottom: 20,
    backgroundColor: "white",
  },
  viewContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    color: "black",
    width: 170,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
});
