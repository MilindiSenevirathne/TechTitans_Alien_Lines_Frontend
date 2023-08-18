import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import {useTheme} from "react-native-paper";
import DropDown from 'react-native-paper-dropdown';

const DropdownField = ({ label, error, list }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [value, setValue] = useState("");
  const theme = useTheme();


  return (

    <View style={{borderWidth: 2,
        borderColor: theme.colors.fieldColor,
        borderRadius: 5,}} >
    <DropDown
      label={label}
      mode={'flat'}
      visible={showDropDown}
      showDropDown={() => setShowDropDown(true)}
      onDismiss={() => setShowDropDown(false)}
      value={value}
      setValue={setValue}
      list={list}
      underlineColor='#ffffff'
      activeColor='#000000cc'
      dropDownItemStyle={{backgroundColor: '#ffffff', borderWidth: 0}}
      dropDownStyle={{backgroundColor: '#fffffff',borderWidth: 2,
        borderColor: theme.colors.fieldColor,
        borderRadius: 5}}
      dropDownItemSelectedStyle={{backgroundColor: theme.colors.secondary}}
    />
    </View>
  );
};



export default DropdownField;
