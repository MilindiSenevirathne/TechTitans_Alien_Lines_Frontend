import {useState} from "react";
import { format } from 'date-fns';
import { View, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { DatePickerInput} from 'react-native-paper-dates';

const CalenderField = ({ label, error }) => {
  const [inputDate, setInputDate] = useState(new Date())
  const theme = useTheme();

  return (
    <View style={{borderWidth: 2,
        borderColor: theme.colors.fieldColor,
        borderRadius: 5,}} >
        <DatePickerInput
        locale="en"
          label={label}
          value={inputDate}
          onChange={(d) => setInputDate(d)}
          inputMode="start"
          style={{width: 200}}
          mode="flat"
          underlineColor='#ffffff'
        />
        </View>
  );
}


export default CalenderField;