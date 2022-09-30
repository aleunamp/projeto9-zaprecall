import styled from "styled-components";

import React from "react";

import deck from "./deck";

import ContainerDoLogo from "./ContainerDoLogo";
import Flashcards from "./Flashcards";
import ContainerDosConcluidos from "./ContainerDosConcluidos";

export default function ContainerDaTela(props) {
    const [contadorRespondidas, setContadorRespondidas] = React.useState(0);
    return (
        <>
            <ScreenContainer>
                <ContainerDoLogo />
                <Flashcards deck={deck}
                    setContadorRespondidas={setContadorRespondidas}
                    contadorRespondidas={contadorRespondidas} />
            </ScreenContainer>

            <ContainerDosConcluidos deck={deck}
                contadorRespondidas={contadorRespondidas} />
        </>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`;