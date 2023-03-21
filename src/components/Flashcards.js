import Flashcard from "./Flashcard";

export default function Flashcards(props) {
    const { deck, setCounter, counter } = props;

    return (<div>
        {deck.map((deck, index) => <Flashcard
            key={index}
            index={index}
            deck={deck}
            setCounter={setCounter}
            counter={counter}
        />)}
    </div>
    )
}

