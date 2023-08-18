import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { TextInput, useTheme, Searchbar} from 'react-native-paper';


const SearchField = ({label, placeholder, error}) => {
  const [text, setText] = useState("");
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{borderWidth: 2,
        borderColor: theme.colors.fieldColor,
        borderRadius: 50,}} >
    <Searchbar
      placeholder="Modify Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      iconColor={theme.colors.fieldColor}
      inputStyle={{marginHorizontal: 20}}
      style={{color:"#4C0259"}}
      

    />
    </View>
  );

  
};




export default SearchField;