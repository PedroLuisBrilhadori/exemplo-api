import express from "express";
import { Express } from "express";

export const bootstrap = (): Promise<Express> => {
  return new Promise((resolve, reject) => {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.send("hello world");
    });

    app.listen(port, () => {
      console.log(`api rodando na porta ${port}`);

      resolve(app);
    });
  });
};
