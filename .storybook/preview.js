import { ThemeProvider } from "styled-components"
import { DefaultTheme } from 'types'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <Story />
    </ThemeProvider>
  )
]