import { useNavigation } from "@react-navigation/native";
import * as React from "react";
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
registerTranslation("en", en);

export default function HomePage({ navigation }) {
  const modalShow = React.useRef(null);
  //   for testing booking page
  const nav = useNavigation();

  const navigateToSpaceships = () => {
    nav.navigate("BookingPage", {
      from: "Los Angeles, Earth",
      to: "Ares Prime, Mars",
      date: "2023-08-19",
    });
  };

  //modal visibility
  const refRBSheet = React.useRef(null);

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  const hideBottomSheet = () => {
    refRBSheet.current.close();
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
                <View style={styles.dropDownField}>
                  <Button title="OPEN BOTTOM SHEET" onPress={openBottomSheet} />
                  <CommonModal
                    containerHeight={500}
                    onOpen={refRBSheet}
                    onClose={hideBottomSheet}
                    firstTitle={"First"}
                    secondTitle={"Second"}
                    bottom={<CommonButton lable={"Check Rate"} />}
                    content={
                      <View>
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
                    }
                  />
                </View>

                <CalenderField label="Departure Date" />
                <CalenderField label="Return Date" />
                <CommonButton
                  label="Book Now"
                  commonBtnPress={() => navigation.navigate("BookingPage")}
                />
              </>
            )}
          </View>
        </TouchableOpacity>

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
                {/* <Text style={styles.cardTitlePlanet}>{card.title}</Text>
                <Text>{card.content}</Text> */}
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
                        style={{ marginLeft: 90, height: 16, width: 16}}
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
