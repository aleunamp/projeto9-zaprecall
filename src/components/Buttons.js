import styled from "styled-components";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErrado from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default function Buttons(props) {
    const { setCard, setCounter, counter, setAnswer } = props;

    function selectButton(color) {
        const closedCard = { color: color };

        if (color === "#FF3030") {
            closedCard.icone = iconeErrado;
        }

        if (color === "#FF922E") {
            closedCard.icone = iconeQuase;
        }

        if (color === "#2FBE34") {
            closedCard.icone = iconeCerto;
        }

        setAnswer(closedCard);
        setCounter(counter + 1);
        setCard("respondido");
    }

    return (
        <ContainerBotoes>
            <Botao data-identifier="forgot-btn" onClick={() => selectButton("#FF3030")} color={"#FF3030"}>Não lembrei</Botao>
            <Botao data-identifier="almost-forgot-btn" onClick={() => selectButton("#FF922E")} color={"#FF922E"}>Quase não lembrei</Botao>
            <Botao data-identifier="zap-btn" onClick={() => selectButton("#2FBE34")} color={"#2FBE34"}>Zap!</Botao>
        </ContainerBotoes>
    )
}

const ContainerBotoes = styled.div`
    display: flex;
    width: 85%;
    gap: 17px;
    margin: 20px;
`;

const Botao = styled.button`
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: ${props => props.color};
        border-radius: 5px;
        border: 1px solid ${props => props.color};
        padding:5px;
        cursor: pointer;
`;