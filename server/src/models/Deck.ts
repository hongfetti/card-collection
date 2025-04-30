import { Schema, model, type Document } from "mongoose";

interface IDeck extends Document {
    id: string;
    deckName: string;
    image: string;
    cardList: string[]; //an array of cardId (string)
}

const deckSchema = new Schema<IDeck>({
    id: {
        type: String,
    },
    deckName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    cardList: [
        {
            type: String,
        },
    ],
});

const Deck = model<IDeck>('Deck', deckSchema);
export { type IDeck, deckSchema };
export default Deck