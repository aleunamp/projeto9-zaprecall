import styled from "styled-components";
import logo from "../assets/img/logo.png";

export default function Header({ screen }) {
    return (
        <LogoContainer screen={screen}>
            <img screen={screen} src={logo} alt={logo}></img>
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.screen === "telaInicial" ? "column" : "row"};
    align-items: center;
    margin: 40px 0 20px 0;
    gap: ${props => props.screen === "telaInicial" ? "20px" : ""};

    img {
        width: ${props => props.screen === "telaInicial" ? "136px" : "52px"};
    }

    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`;