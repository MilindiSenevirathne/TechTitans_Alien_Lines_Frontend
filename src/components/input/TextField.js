import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { TextInput, useTheme} from 'react-native-paper';

const TextField = ({label, placeholder, error}) => {
  const [text, setText] = useState("");
  const theme = useTheme();

  return (
    <TextInput
      label={label}
      value={text}
      onChangeText={text => setText(text)}
      placeholder={placeholder}
      selectionColor={theme.colors.fieldColor}
      error={error}
      underlineColor='#ffffff'
      activeUnderlineColor={theme.colors.primary}
      style={{
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: theme.colors.fieldColor,
        borderRadius: 5,
        paddingHorizontal: 10,
      }}
    />
  );

  
};




export default TextField;