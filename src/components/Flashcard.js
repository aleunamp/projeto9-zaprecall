import styled from "styled-components";

import React from "react";

import setaPlay from "../assets/img/seta_play.png";
import setaVirar from "../assets/img/seta_virar.png";

import ContainerDosBotoes from "./ContainerDosBotoes";

export default function Flashcard(props) {
    const { index, deck, setContadorRespondidas, contadorRespondidas } = props;
    const [card, setCard] = React.useState("fechado");
    const [infoDaResposta, setInfoDaResposta] = React.useState({});

    if (card === "fechado") {
        return (
            <PerguntaFechada data-identifier="flashcard">
                <p>Pergunta {index + 1}</p>
                <img data-identifier="flashcard-show-btn" onClick={() => setCard("aberto")} src={setaPlay} alt={setaPlay}></img>
            </PerguntaFechada>
        )
    } else if (card === "aberto") {
        return (
            <PerguntaAberta data-identifier="flashcard-question">
                {deck.pergunta}
                <img data-identifier="flashcard-turn-btn" onClick={() => setCard("de resposta")} src={setaVirar} alt={setaVirar}></img>
            </PerguntaAberta>
        )
    } else if (card === "de resposta") {
        return (
            <PerguntaAberta data-identifier="flashcard-answer">
                {deck.resposta}
                <ContainerDosBotoes
                    setCard={setCard}
                    setInfoDaResposta={setInfoDaResposta}
                    setContadorRespondidas={setContadorRespondidas}
                    contadorRespondidas={contadorRespondidas}
                />
            </PerguntaAberta>
        )
    } else if (card === "respondido") {
        return (
            <PerguntaRespondida data-identifier="flashcard-index-item" cor={infoDaResposta.cor}>
                <p>Pergunta {index + 1}</p>
                <img data-identifier="flashcard-status" src={infoDaResposta.icone} alt={infoDaResposta.icone}></img>
            </PerguntaRespondida>
        )
    }
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img{
        cursor: pointer;
    }
`;

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
    }
`;

const PerguntaRespondida = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-decoration: line-through;
        color: ${props => props.cor};
        cursor: pointer;
    }
`;