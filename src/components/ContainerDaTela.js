import styled from "styled-components";

import React from "react";

import deck from "./deck";

import ContainerDoLogo from "./ContainerDoLogo";
import Flashcards from "./Flashcards";
import ContainerDosConcluidos from "./ContainerDosConcluidos";

export default function ContainerDaTela(props) {
    const [contadorRespondidas, setContadorRespondidas] = React.useState(0);
    const [tela, setTela] = React.useState("telaInicial");

    if (tela === "telaInicial") {
        return (
            <>
                <ScreenContainer tela={tela}>
                    <ContainerDoLogo tela={tela} />
                    <BotaoDeIniciar onClick={() => setTela("telaDeFlashcards")}>Iniciar Recall!</BotaoDeIniciar>
                </ScreenContainer>
            </>
        );
    } else if (tela === "telaDeFlashcards") {
        return (
            <>
                <ScreenContainer tela={tela}>
                    <ContainerDoLogo />
                    <Flashcards deck={deck}
                        setContadorRespondidas={setContadorRespondidas}
                        contadorRespondidas={contadorRespondidas}
                    />
                </ScreenContainer>

                <ContainerDosConcluidos deck={deck}
                    contadorRespondidas={contadorRespondidas}
                />
            </>
        )
    }

}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.tela === "telaInicial" ? "center" : ""};
    gap: ${props => props.tela === "telaInicial" ? "30px" : ""};
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;

const BotaoDeIniciar = styled.div`
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`