import userSeed from "./seeders/userSeeder.js";

const seedAll = async () => {
  await userSeed();
}

seedAll();