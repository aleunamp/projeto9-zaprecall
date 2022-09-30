import styled from "styled-components";

import iconeCerto from "../assets/img/icone_certo.png";
import iconeErrado from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default function ContainerDosBotoes(props){
    const {setCard, index, setContadorRespondidas, contadorRespondidas} = props;
    console.log(contadorRespondidas)

    function selecionarBotao(cor){
        let novoCardFechado;
        if(cor === "#FF3030"){
            novoCardFechado = (
                <PerguntaFechada cor = "#FF3030">
                    <p>Pergunta {index + 1}</p>
                    <img src={iconeErrado} alt={iconeErrado}></img>
                </PerguntaFechada>);
        }
        
        if(cor === "#FF922E"){
            novoCardFechado = (
                <PerguntaFechada cor = "#FF922E">
                    <p>Pergunta {index + 1}</p>
                    <img src={iconeQuase} alt={iconeQuase}></img>
                </PerguntaFechada>);
        } 
        
        if(cor === "#2FBE34"){
            novoCardFechado = (
                <PerguntaFechada cor = "#2FBE34">
                    <p>Pergunta {index + 1}</p>
                    <img src={iconeCerto} alt={iconeCerto}></img>
                </PerguntaFechada>);
        }
        setCard(novoCardFechado);
        setContadorRespondidas(contadorRespondidas + 1);
    }

    return(
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
`;

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
        text-decoration: line-through;
        color: ${props => props.cor};
    }
`;