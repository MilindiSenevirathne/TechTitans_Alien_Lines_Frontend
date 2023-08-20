import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
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
import CalenderField from "../components/input/CalendarField";
import DropdownField from "../components/input/DropdownField";
import SearchField from "../components/input/SearchField";
import TextField from "../components/input/TextField";
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

  //collapsible card
  const [isCardExpanded, setCardExpanded] = React.useState(false);
  const [arrowImageSource, setArrowImageSource] = React.useState(require('../images/dropdownDownArrow.png'));

  const toggleCardExpansion = () => {
      setCardExpanded(!isCardExpanded);
      setArrowImageSource(
          isCardExpanded ? require('../images/dropdownDownArrow.png') : require('../images/dropdownUpArrow.png')
      );
  };
  //    for testing booking page
  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar isLogged={true} />
        <Text style={styles.text}>Navbar before login</Text>
        <NavBar isLogged={false} />

        <View style={styles.container}>
          <Image
            source={require("../images/homeHeroBackground.png")} // Replace with your image path
            style={styles.roundedImage}
          />
        </View>

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
              <Image source={arrowImageSource} style={{ width: 20, height: 20 }} />
            </View>
            {/* Collapsible Content */}
            {isCardExpanded && (
              <>
                {/* CommonDropdown Component for Mode Selection */}
                {/* CommonDropdown Component for From and To Selection */}
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

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            {/* Form Elements */}
            <Text style={styles.cardTitle}>Book a Space Shuttle</Text>
            <View style={styles.textfield}>
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
            <CalenderField label="Departure Date" />
            <CalenderField label="Return Date" />
            <CommonButton
              label="Book Now"
              commonBtnPress={() => navigation.navigate("BookingPage")}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text>Sample Text Input</Text>
          <StatusBar style="auto" />
          <View style={styles.textfield}>
            <TextField label="Email" placeholder="Enter Email" />
          </View>
          <View style={styles.textfield}>
            <TextField label="Email" placeholder="Enter Email" />
          </View>

          <Text>Sample Dropdown Input</Text>
          <View style={styles.textfield}>
            <DropdownField
              list={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
              ]}
              label="Gender"
            />
          </View>
          <View style={styles.textfield}>
            <DropdownField
              list={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
              ]}
              label="Gender"
            />
          </View>
          <Text>Sample Calendar Input</Text>
          <View style={styles.textfield}>
            <CalenderField label="Birthday" />
          </View>
          <View style={styles.textfield}>
            <CalenderField label="Birthday" />
          </View>

          <Text>Sample Search Bar</Text>
          <View style={styles.textfield}>
            <SearchField />
          </View>
          <View style={styles.textfield}>
            <SearchField />
          </View>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
},
card: {
    width: 300,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
cardHeader: {
    flexDirection: 'row',
    alignItems: 'center'
},
cardIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
},
cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
},
dropdownArrow: {
    width: 16,
    height: 16,
},
});
