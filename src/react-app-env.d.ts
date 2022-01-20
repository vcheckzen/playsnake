/// <reference types="react-scripts" />
import 'styled-components';

declare module '*.mp3';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  }
}
