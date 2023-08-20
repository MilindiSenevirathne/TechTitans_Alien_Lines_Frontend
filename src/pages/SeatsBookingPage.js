import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView} from "react-native";
import { Button } from "react-native-paper";

export default function Seatbooking({ navigation }) {
  const [seatState, setSeatState] = useState({
    seat: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "A13",
      "A14",
      "A15",
      "A16",
      "A17",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
    ],
    seatAvailable: [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "A13",
      "A14",
      "A15",
      "A16",
      "A17",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
    ],
    seatReserved: [],
    seatSelected: [],
  });

  const onClickData = (seat) => {
    if (seatState.seatReserved.indexOf(seat) > -1) {
      setSeatState({
        ...seatState,
        seatAvailable: seatState.seatAvailable.concat(seat),
        seatReserved: seatState.seatReserved.filter((res) => res !== seat),
      });
    } else {
      setSeatState({
        ...seatState,
        seatReserved: seatState.seatReserved.concat(seat),
        seatAvailable: seatState.seatAvailable.filter((res) => res !== seat),
      });
    }
  };

  const checktrue = (row) => {
    return seatState.seatSelected.indexOf(row) === -1;
  };

  const handleSubmited = () => {
    setSeatState({
      ...seatState,
      seatSelected: seatState.seatSelected.concat(seatState.seatReserved),
      seatReserved: [],
    });
  };

  return (
      <SafeAreaView style={{flex: 1}}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Aktau - London
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
        <View
          style={{
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>Select seat</Text>
          <DrawGrid
            seat={seatState.seat}
            available={seatState.seatAvailable}
            z
            reserved={seatState.seatReserved}
            selected={seatState.seatSelected}
            onClickData={onClickData}
            checktrue={checktrue}
            handleSubmited={handleSubmited}
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
              Total for seats:
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
      </SafeAreaView>
  );
}

function DrawGrid(props) {
  const onClickSeat = (seat) => {
    props.onClickData(seat);
  };

  return (
    <View>
      <View>
        <Text style={styles.subtitle}></Text>
        <View style={styles.grid}>
          {props.seat.map((row) => (
            <TouchableOpacity
              style={[
                styles.seat,
                {
                  backgroundColor:
                    props.selected.indexOf(row) > -1
                      ? "#CA4255"
                      : props.reserved.indexOf(row) > -1
                      ? "#F88E9D"
                      : "#e0e0e0",
                },
              ]}
              key={row}
              onPress={() => (props.checktrue(row) ? onClickSeat(row) : null)}
            >
              <Text>{row}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={props.handleSubmited}
        >
          <Text style={styles.buttonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: '#616161'
  },
  subtitle: {
    fontSize: 18,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  seat: {
    width: 40,
    height: 40,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: "#CA4255",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
