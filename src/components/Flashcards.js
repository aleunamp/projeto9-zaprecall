import Flashcard from "./Flashcard";

export default function Flashcards(props) {
    const { deck, setContadorRespondidas, contadorRespondidas } = props;

    return (<div>
        {deck.map((deck, index) => <Flashcard
            key={index}
            index={index}
            deck={deck}
            setContadorRespondidas={setContadorRespondidas}
            contadorRespondidas={contadorRespondidas} />)}
    </div>
    )
}

