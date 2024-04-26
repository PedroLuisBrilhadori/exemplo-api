import "reflect-metadata";

import { bootstrap } from "./api";
import { getDataSource } from "./typeorm.config";
import { userRoutes } from "./routes";

const main = async () => {
  const dataSource = await getDataSource();
  const app = await bootstrap();

  userRoutes(app, dataSource);
};

main();
