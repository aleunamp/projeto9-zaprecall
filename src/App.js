import logo from "./assets/img/logo.png";
import iconeCerto from "./assets/img/icone_certo.png";
import iconeErrado from "./assets/img/icone_erro.png";
import iconeQuase from "./assets/img/icone_quase.png";
import party from "./assets/img/party.png";
import sad from "./assets/img/sad.png";
import setaPlay from "./assets/img/seta_play.png";
import setaVirar from "./assets/img/seta_virar.png";



export default function App() {
    return (
        <div>
            <div className="screen-container">
                <div className="logo-container">
                    <img src={logo} alt={logo}></img>
                    <h1>ZapRecall</h1>     
                </div>
                <div className="pergunta-fechada">
                    oi
                    <img src={setaPlay} alt={setaPlay}></img>
                </div>
                <div className="pergunta-aberta">
                    oi
                    <img src={setaVirar} alt={setaVirar}></img>
                </div>
            </div>
            <div className="footer-concluidos">
                <div className="container-botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
                0/4 CONCLUÍDOS
            </div>
        </div>

    )
}