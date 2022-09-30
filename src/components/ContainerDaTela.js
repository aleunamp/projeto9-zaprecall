import styled from "styled-components";

import ContainerDoLogo from "./ContainerDoLogo";
import Flashcards from "./Flashcards";
import ContainerDosConcluidos from "./ContainerDosConcluidos";

export default function ContainerDaTela() {
    return (
        <>
            <ScreenContainer>
                <ContainerDoLogo />
                <Flashcards />
            </ScreenContainer>

            <ContainerDosConcluidos />
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