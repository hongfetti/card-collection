import sequelize from '../config/connection.js'
import { UserFactory } from './User.js';
import { CardFactory } from './Card.js';
import { DeckFactory } from './Deck.js';

const User = UserFactory(sequelize);
const Card = CardFactory(sequelize);
const Deck = DeckFactory(sequelize);

export { User, Card, Deck };
