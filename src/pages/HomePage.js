import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { en, registerTranslation } from "react-native-paper-dates";
import { CommonButton } from "../components/common/CommonButton";
import { CommonModal } from "../components/common/CommonModal";
import CalenderField from "../components/input/CalendarField";
import DropdownField from "../components/input/DropdownField";
import NavBar from "../components/navbar/NavBar";
import { useTheme } from "react-native-paper";
registerTranslation("en", en);

export default function HomePage({ navigation }) {
  //   for testing booking page
  const nav = useNavigation();
  const refRBSheet = React.useRef(null);

  //passenger counting
  const [adultsCount, setAdultsCount] = React.useState(0);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [infantsCount, setInfantsCount] = React.useState(0);

  //fromtoselection
  const [selectedFromStation, setSelectedFromStation] = React.useState(null);
  const [selectedToStation, setSelectedToStation] = React.useState(null);
  const [availableStations, setAvailableStations] = React.useState([]);

  const navigateToSpaceships = () => {
    nav.navigate("BookingPage", {
      shuttleType: "LPT",
      passengerCount: 3,
      departureDate: "2023-08-20",
      departureId: 22,
      arrivalDate: "2023-08-20",
      arrivalId: 11,
      from: "Los Angeles, Earth",
      to: "Ares Prime, Mars",
    });
  };

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

  const hideModal = () => {
    refRBSheet.current.close();
  };
  const [modalContent, setModalContent] = React.useState(null);

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

  const [images, setImages] = React.useState([
    "https://source.unsplash.com/1024x768/?nature",

    "https://source.unsplash.com/1024x768/?water",

    "https://source.unsplash.com/1024x768/?tree",
  ]);

  const cards = [
    {
      title: "Solar City",
      content: "Saturn",
      rating: "4.8",
      image: require("../images/place1.png"),
    },
    {
      title: "Jupiter",
      content: "Jupiter",
      rating: "4.6",
      image: require("../images/place1.png"),
    },
    {
      title: "Solar City",
      content: "Saturn",
      rating: "4.5",
      image: require("../images/place1.png"),
    },
  ];

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

  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar isLogged={true} />

        <View style={styles.container}>
          <Image
            source={require("../images/homeHeroBackground.png")}
            style={styles.roundedImage}
          />
        </View>

        {/* Collapsible Card for Spaceship booking */}
        <TouchableOpacity
          onPress={toggleCardExpansion}
          style={styles.cardContainer}
        >
          <View style={styles.cardBook}>
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
                  commonBtnPress={() => navigateToSpaceships()}
                />
              </>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleCardExpansion}
          style={styles.cardContainer}
        >
          <View style={styles.cardBook}>
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
          lable={"Search"}
          commonBtnPress={() => navigation.navigate("MyBookings")}
        />

        <View>
          <Text style={styles.mainTitle}>Trending Destinations</Text>
          <View style={styles.slider}>
            <SliderBox
              images={images}
              sliderBoxHeight={280}
              dotColor="#4C0259"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              ImageComponentStyle={{ width: 320, borderRadius: 20 }}
              resizeMode={"cover"}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 30,
            marginLeft: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.chipButtonSelected}>
            <Text style={styles.chipButtonSelectedText}>planets</Text>
          </View>
        </View>

        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {cards.map((card, index) => (
              <View key={index} style={styles.card}>
                <Image source={card.image} style={styles.cardImage} />
                <View
                  style={{
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      {card.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        source={require("../images/location.png")}
                        style={{ height: 16, width: 16, marginRight: 5 }}
                      />
                      <Text style={{ fontSize: 16, color: "#616161" }}>
                        {card.content}
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
                    <Image
                      source={require("../images/star.png")}
                      style={{ marginLeft: 90, height: 16, width: 16 }}
                    />
                    <Text
                      style={{ marginLeft: 5, marginRight: 10, fontSize: 16 }}
                    >
                      {card.rating}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
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
  slider: {
    backgroundColor: "white",
    flex: 1,
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
  mainTitle: {
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    padding: 20,
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

  chipButtonSelected: {
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 5,
    border: "none",
    backgroundColor: "#151414",
  },
  cardBook: {
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
  chipButtonSelectedText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  card: {
    width: 220,
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 200,
    height: 140,
    resizeMode: "cover",
    borderRadius: 20,
    marginTop: 10,
  },
  cardTitlePlanet: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
  },
});
