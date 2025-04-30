import { Schema, model, type Document } from "mongoose";

interface ICard extends Document {
    cardId: string;
    cardName: string;
    image: string;
}

const cardSchema = new Schema<ICard>({
    cardId: {
        type: String,
    },
    cardName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Card = model<ICard>('Card', cardSchema);
export { type ICard, cardSchema };
export default Card