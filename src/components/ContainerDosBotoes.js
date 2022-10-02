import styled from "styled-components";

import iconeCerto from "../assets/img/icone_certo.png";
import iconeErrado from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default function ContainerDosBotoes(props) {
    const { setCard, setContadorRespondidas, contadorRespondidas, setInfoDaResposta } = props;

    function selecionarBotao(cor) {
        const novoCardFechado = { cor: cor };

        if (cor === "#FF3030") {
            novoCardFechado.icone = iconeErrado;
        }

        if (cor === "#FF922E") {
            novoCardFechado.icone = iconeQuase;
        }

        if (cor === "#2FBE34") {
            novoCardFechado.icone = iconeCerto;
        }

        setInfoDaResposta(novoCardFechado);
        setContadorRespondidas(contadorRespondidas + 1);
        setCard("respondido");
    }

    return (
        <ContainerBotoes>
            <Botao onClick={() => selecionarBotao("#FF3030")} cor={"#FF3030"}>Não lembrei</Botao>
            <Botao onClick={() => selecionarBotao("#FF922E")} cor={"#FF922E"}>Quase não lembrei</Botao>
            <Botao onClick={() => selecionarBotao("#2FBE34")} cor={"#2FBE34"}>Zap!</Botao>
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
        background: ${props => props.cor};
        border-radius: 5px;
        border: 1px solid ${props => props.cor};
        padding:5px;
        cursor: pointer;
`;