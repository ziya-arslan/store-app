import {Theme} from '@react-navigation/native';

export type ThemeProps = Theme & {
  colors: {
    buttonBackground: string;
  };
};
