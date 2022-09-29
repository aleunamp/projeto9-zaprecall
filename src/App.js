//import iconeCerto from "./assets/img/icone_certo.png";
//import iconeErrado from "./assets/img/icone_erro.png";
//import iconeQuase from "./assets/img/icone_quase.png";
//import party from "./assets/img/party.png";
//import sad from "./assets/img/sad.png";

import GlobalStyle from "./createGlobalStyle";

import ContainerDaTela from "./ContainerDaTela.js";
import ContainerDosConcluidos from "./ContainerDosConcluidos";

export default function App() {
    return (
        <div>
            <GlobalStyle />

            <ContainerDaTela />

            <ContainerDosConcluidos />
        </div>

    )
}

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/


