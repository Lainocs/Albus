import { faker } from '@faker-js/faker/locale/fr';
import User from '../models/user.js';

const seed = async () => {
  User.destroy({ truncate: true });

  const users = [];
  for (let i = 0; i < 50; i++) {
    users.push({
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.avatar(),
      role: faker.helpers.arrayElement(['student', 'teacher']),
    });
  }

  await User.bulkCreate(users);
}

export default seed;