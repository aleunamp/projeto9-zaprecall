import styled from "styled-components";
import React from "react";
import deck from "./deck";
import Header from "./Header";
import Flashcards from "./Flashcards";
import CompletedContainer from "./CompletedContainer";

export default function MainScreen(props) {
    const [counter, setCounter] = React.useState(0);
    const [screen, setScreen] = React.useState("telaInicial");

    if (screen === "telaInicial") {
        return (
            <>
                <ScreenContainer screen={screen}>
                    <Header screen={screen} />
                    <BotaoDeIniciar data-identifier="start-btn" onClick={() => setScreen("telaDeFlashcards")}>Iniciar Recall!</BotaoDeIniciar>
                </ScreenContainer>
            </>
        );
    } else if (screen === "telaDeFlashcards") {
        return (
            <>
                <ScreenContainer screen={screen}>
                    <Header />
                    <Flashcards
                        deck={deck}
                        setCounter={setCounter}
                        counter={counter}
                    />
                </ScreenContainer>

                <CompletedContainer
                    deck={deck}
                    counter={counter}
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
    justify-content: ${props => props.screen === "telaInicial" ? "center" : ""};
    gap: ${props => props.screen === "telaInicial" ? "30px" : ""};
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