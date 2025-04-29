import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    { username: 'JollyGuru', name: 'jolly', email: 'jolly@guru.com', password: 'password' },
    { username: 'SunnyScribe', name: 'sunny', email: 'sunny@scribe.com', password: 'password' },
    { username: 'RadiantComet', name: 'radiant', email: 'radiant@comet.com', password: 'password' },
  ], { individualHooks: true });
};
