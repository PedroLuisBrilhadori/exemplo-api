import { DataSource } from "typeorm";
import { Task, User } from "./models";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "jireSUi423",
  database: "teste",
  synchronize: true,
  entities: [User, Task],
});

export const getDataSource = (): Promise<DataSource> => {
  return new Promise((resolve, reject) => {
    AppDataSource.initialize().then(() => {
      resolve(AppDataSource);
    }).catch(error => reject(error))
  });
};
