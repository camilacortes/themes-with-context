import React from 'react';
import {ThemeContextConsumer} from './themeContextProvider.js';


function App(props) {

  return(
    <ThemeContextConsumer>
      { 
      value => {
        return(
      <div style={{backgroundColor: value.backgroundColor, color: value.textColor, display: "block" , width: "400px", height: "400px" }}>
      <p>Changing themes with Context! </p>
      <button onClick={value.changingTheme}>Change the Theme</button>
      </div>)
      }
      }
    </ThemeContextConsumer>
  )

}

export default App