import styled from "styled-components";

export default function ContainerDosConcluidos() {
    return (
        <FooterConcluidos>
            <ContainerBotoes>
                <Botao cor="#FF3030">Não lembrei</Botao>
                <Botao cor="#FF922E">Quase não lembrei</Botao>
                <Botao cor="#2FBE34">Zap!</Botao>
            </ContainerBotoes>
            0/4 CONCLUÍDOS
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
        border: 1px solid blue;
        padding:5px;
`;