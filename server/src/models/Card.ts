import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface CardAttributes {
    id: number;
    card_name: string;
    image_url: string;
}

interface CardCreationAttributes extends Optional<CardAttributes, 'id'> {}

export class Card extends Model<CardAttributes, CardCreationAttributes> implements CardAttributes {
    public id!: number;
    public card_name!: string;
    public image_url!: string;
}

export function CardFactory(sequelize: Sequelize): typeof Card {
    Card.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            card_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image_url: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'cards',
            sequelize,
            hooks: {}
        }
    );

    return Card;
}