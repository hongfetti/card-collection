import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface DeckAttributes {
    id: number;
    deck_name: string;
    image_url: string;
    // cards: string[];
}

interface DeckCreationAttributes extends Optional<DeckAttributes, 'id'> {}

export class Deck extends Model<DeckAttributes, DeckCreationAttributes> implements DeckAttributes {
    public id!: number;
    public deck_name!: string;
    public image_url!: string;
    // public cards!: string[];
}

export function DeckFactory(sequelize: Sequelize): typeof Deck {
    Deck.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            deck_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            // cards: {
            //     type: DataTypes.ARRAY,
            //     allowNull: false,
            // },
        },
        {
            tableName: 'decks',
            sequelize,
            hooks: {}
        }
    );

    return Deck
}