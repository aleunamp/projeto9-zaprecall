//import iconeCerto from "./assets/img/icone_certo.png";
//import iconeErrado from "./assets/img/icone_erro.png";
//import iconeQuase from "./assets/img/icone_quase.png";
//import party from "./assets/img/party.png";
//import sad from "./assets/img/sad.png";

import styled from "styled-components";

import deck from "./deck"

export default function ContainerDosConcluidos() {
    const cores = ["#FF3030", "#FF922E","#2FBE34"];
    const [vermelho, amarelo, verde] = cores;

    const qntdDePerguntas = deck.length;
    return (
        <FooterConcluidos>
            <ContainerBotoes>
                <Botao cor={vermelho}>Não lembrei</Botao>
                <Botao cor={amarelo}>Quase não lembrei</Botao>
                <Botao cor={verde}>Zap!</Botao>
            </ContainerBotoes>
            0/{qntdDePerguntas} CONCLUÍDOS
        </FooterConcluidos>
    )
}

const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`;

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
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