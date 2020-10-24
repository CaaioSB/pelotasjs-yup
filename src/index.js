import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@naveteam/saturn'
import Routes from './routes'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

#root {
  font-family: 'Poopins', sans-serif;
  background-color: #e0e0e0
}
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
