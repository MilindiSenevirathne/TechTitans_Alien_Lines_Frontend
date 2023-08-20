import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { en, registerTranslation } from "react-native-paper-dates";
import { CommonButton } from "../components/common/CommonButton";
import { CommonModal } from "../components/common/CommonModal";
import CalenderField from "../components/input/CalendarField";
import DropdownField from "../components/input/DropdownField";
import SearchField from "../components/input/SearchField";
import TextField from "../components/input/TextField";
import NavBar from "../components/navbar/NavBar";
import { useTheme } from "react-native-paper";
registerTranslation("en", en);

export default function HomePage({ navigation }) {
  //   for testing booking page
  const nav = useNavigation();
  const navigateToSpaceships = () => {
    nav.navigate("BookingPage", {
      from: "Los Angeles, Earth",
      to: "Ares Prime, Mars",
      date: "2023-08-19",
    });
  };

  //passenger counting
  const [adultsCount, setAdultsCount] = React.useState(0);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [infantsCount, setInfantsCount] = React.useState(0);

  //fromtoselection
  const [selectedFromStation, setSelectedFromStation] = React.useState(null);
  const [selectedToStation, setSelectedToStation] = React.useState(null);
  const [availableStations, setAvailableStations] = React.useState([]);

  useEffect(() => {
    fetch("http://alienlines.eastus.cloudapp.azure.com:3000/api/space-station/")
      .then((response) => response.json())
      .then((data) => {
        // Update the availableStations state with the fetched station data
        setAvailableStations(data);
      })
      .catch((error) => {
        console.error("Error fetching space stations:", error);
      });
  }, []);

  const [selectStep, setSelectStep] = React.useState("from");

  const increaseCount = (countSetter) => {
    countSetter((prevCount) => prevCount + 1);
  };

  const decreaseCount = (countSetter) => {
    if (countSetter !== 0) {
      countSetter((prevCount) => prevCount - 1);
    }
  };

  //modal visibility
  const refRBSheet = React.useRef(null);

  const hideModal = () => {
    refRBSheet.current.close();
  };
  const [modalContent, setModalContent] = React.useState(null);

  //Modal Contents
  const fromToModalContent = (
    <View style={styles.fromToModalContent}>
      <Text style={styles.fromToModalTitle}>
        {selectStep === "from" ? "Select From Station" : "Select To Station"}
      </Text>
      <View style={styles.fromToModalStations}>
        {availableStations.map((station) => (
          <TouchableOpacity
            key={station.id}
            onPress={() => {
              if (selectStep === "from") {
                setSelectedFromStation(station.name);
                setSelectStep("to");
              } else {
                setSelectedToStation(station.name);
                hideModal();
              }
            }}
            style={styles.fromToModalStationItem}
            disabled={station.name === selectedFromStation}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../images/satellite.png")} // Replace with the actual icon image
                style={{ width: 20, height: 20, marginRight: 10 }}
              />
              <Text
                style={{
                  color:
                    station.name === selectedFromStation ? "gray" : "black",
                }}
              >
                {station.name} - {station.planet}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const passengersModalContent = (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Passengers</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Adults</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => decreaseCount(setAdultsCount)}>
            <Image
              source={require("../images/minus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{adultsCount}</Text>
          <TouchableOpacity onPress={() => increaseCount(setAdultsCount)}>
            <Image
              source={require("../images/plus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Children</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => decreaseCount(setChildrenCount)}>
            <Image
              source={require("../images/minus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{childrenCount}</Text>
          <TouchableOpacity onPress={() => increaseCount(setChildrenCount)}>
            <Image
              source={require("../images/plus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Infants</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => decreaseCount(setInfantsCount)}>
            <Image
              source={require("../images/minus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{infantsCount}</Text>
          <TouchableOpacity onPress={() => increaseCount(setInfantsCount)}>
            <Image
              source={require("../images/plus.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  //switch between contents
  const openfromToModal = () => {
    setModalContent(fromToModalContent);
    refRBSheet.current.open();
    // Populate availableStations list (remove selectedFromStation from available stations)
    const filteredStations = availableStations.filter(
      (station) => station !== selectedFromStation
    );
    setAvailableStations(filteredStations);
  };

  const openPassengersModal = () => {
    setModalContent(passengersModalContent);
    refRBSheet.current.open();
  };

  //collapsible card
  const [isCardExpanded, setCardExpanded] = React.useState(false);
  const [arrowImageSource, setArrowImageSource] = React.useState(
    require("../images/dropdownDownArrow.png")
  );

  const toggleCardExpansion = () => {
    setCardExpanded(!isCardExpanded);
    setArrowImageSource(
      isCardExpanded
        ? require("../images/dropdownDownArrow.png")
        : require("../images/dropdownUpArrow.png")
    );
  };

  //    for testing booking page
  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar isLogged={true} />
        <View style={styles.container}>
          <Image
            source={require("../images/homeHeroBackground.png")} // Replace with your image path
            style={styles.roundedImage}
          />
        </View>

        {/* Collapsible Card for Spaceship booking */}
        <TouchableOpacity
          onPress={toggleCardExpansion}
          style={styles.cardContainer}
        >
          <View style={styles.card}>
            {/* Header */}
            <View style={styles.cardHeader}>
              <Image
                source={require("../images/Spaceship.png")}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Book a Space Shuttle</Text>
              <Image source={arrowImageSource} style={styles.dropdownArrow} />
            </View>
            {/* Collapsible Content */}
            {isCardExpanded && (
              <>
                {/* CommonDropdown Component for Mode Selection */}
                <View style={styles.dropDownField}>
                  <DropdownField
                    list={[
                      {
                        label: "FTL Drive",
                        value: "ftlD",
                      },
                      {
                        label: "Space Elevator",
                        value: "spaceE",
                      },
                      {
                        label: "Space Cruise",
                        value: "spaceC",
                      },
                      {
                        label: "Teleport",
                        value: "teleport",
                      },
                    ]}
                    label="Travelling Mode"
                  />
                </View>
                {/* CommonDropdown Component for From and To Selection */}
                <TouchableOpacity
                  onPress={openfromToModal}
                  style={styles.fromToContainer}
                >
                  <View style={styles.fromToField}>
                    <Text style={styles.fromToLabel}>
                      From: {selectedFromStation || "Select From Station"}
                    </Text>
                  </View>
                  <View style={styles.fromToDivider} />
                  <View style={styles.fromToField}>
                    <Text style={styles.fromToLabel}>
                      To: {selectedToStation || "Select To Station"}
                    </Text>
                  </View>
                  <Image
                    source={require("../images/two-arrow.png")}
                    style={styles.plusIcon}
                  />
                </TouchableOpacity>

                <CalenderField label="Departure" style={styles.calendarField} />
                <CalenderField label="Return" style={styles.calendarField} />

                <TouchableOpacity
                  onPress={openPassengersModal}
                  style={styles.passengerChip}
                >
                  <Text style={styles.passengerText}>
                    Passengers: {adultsCount + childrenCount + infantsCount}
                  </Text>
                </TouchableOpacity>

                <CommonModal
                  containerHeight={500}
                  onOpen={refRBSheet}
                  onClose={hideModal}
                  bottom={
                    <CommonButton
                      lable={"Save"}
                      commonBtnPress={() => {
                        // Perform actions with selectedFromStation and selectedToStation
                        hideModal();
                      }}
                    />
                  }
                  content={modalContent}
                />

                <CommonButton
                  style={styles.searchButton}
                  lable={"Search"}
                  commonBtnPress={() => navigation.navigate("MyBookings")}
                />
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleCardExpansion}
          style={styles.cardContainer}
        >
          <View style={styles.card}>
            {/* Header */}
            <View style={styles.cardHeader}>
              <Image
                source={require("../images/status.png")}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Spaceship Status</Text>
              <Image source={arrowImageSource} style={styles.dropdownArrow} />
            </View>
          </View>
        </TouchableOpacity>

        <CommonButton
          lable={"Press Here"}
          commonBtnPress={() => navigation.navigate("MyBookings")}
        />

        {/*for testing booking page  */}
        <Button title="Booking page" onPress={navigateToSpaceships} />

        {/* <SuccessErrorModal isError={true} title={'Payment Successful'} message={'klnknd vcscjhcscvh'} visible={true}/> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 360,
  },
  textfield: {
    marginTop: 5,
    width: 300,
  },
  dropDownField: {
    marginTop: 10,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
    width: "100%",
  },
  searchButton: {
    marginBottom: 0,
    width: "100%",
  },
  calendarField: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  roundedImage: {
    width: 360,
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  card: {
    width: 300,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  dropdownArrow: {
    width: 20,
    height: 20,
  },
  passengerChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 25,
  },
  stationItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  fromToContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    marginBottom: 10,
  },
  fromToField: {
    flex: 1,
  },
  fromToDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  plusIcon: {
    width: 20,
    height: 20,
  },
  fromToModalContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  fromToModalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fromToModalStations: {
    marginTop: 10,
  },
  fromToModalStationItem: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});
