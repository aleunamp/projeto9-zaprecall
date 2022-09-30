import deck from "./deck"
import Flashcard from "./Flashcard";

export default function Flashcards(){

    return (<div>
        {deck.map((deck, index) => <Flashcard key={index} index={index} deck={deck}/>)}
    </div>
    )
}

