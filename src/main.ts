import "reflect-metadata";

import { bootstrap } from "./api";
import { getDataSource } from "./typeorm.config";
import { taskRoutes, userRoutes } from "./routes";

const main = async () => {
  const dataSource = await getDataSource();
  const app = await bootstrap();

  userRoutes(app, dataSource);
  taskRoutes(app, dataSource);
};

main();
