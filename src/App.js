import GlobalStyle from "./createGlobalStyle";
import React from "react";
import MainScreen from "./components/MainScreen.js";

export default function App() {
    
    return (
        <div>
            <GlobalStyle />
            <MainScreen/>
        </div>

    )
}

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/


