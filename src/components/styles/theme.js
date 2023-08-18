import { DefaultTheme } from "react-native-paper";

const customTheme = {
  ...DefaultTheme,
  myOwnProperty: true,

  colors: {
    ...DefaultTheme.colors,
    primary: '#4C0259',
    onPrimaryContainer: '#ffffff',
    onSecondaryContainer: '#ffffff',
    surfaceVariant: '#ffffff',
    onSurfaceVariant: '#000000cc',
    secondary: '#CA4255',
    fieldColor: '#D3D1D1',
    elevation: {
      level2: '#ffffff',
    },
  },
};

export default customTheme;
