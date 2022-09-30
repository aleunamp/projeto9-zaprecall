import styled from "styled-components";

import React from "react";

import setaPlay from "../assets/img/seta_play.png";
import setaVirar from "../assets/img/seta_virar.png";

export default function Flashcard(props) {
    const { index, deck } = props;

    const cardFechado = (
        <PerguntaFechada>
            <p>Pergunta {index + 1}</p>
            <img onClick={() => setCard(cardPergunta)} src={setaPlay} alt={setaPlay}></img>
        </PerguntaFechada>);

    const cardPergunta = (
        <PerguntaAberta>
            {deck.pergunta}
            <img onClick={() => setCard(cardResposta)} src={setaVirar} alt={setaVirar}></img>
        </PerguntaAberta>);

    const cardResposta =
        (<PerguntaAberta>
            {deck.resposta}
            <img src={setaVirar} alt={setaVirar}></img>
        </PerguntaAberta>);

    const [card, setCard] = React.useState(cardFechado);
    return (
        <>
            {card}
        </>
    )
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
    }
`;