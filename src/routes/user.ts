import { DataSource } from "typeorm";
import { Express } from "express";
import { createUser } from "../services";

export const userRoutes = (app: Express, dataSource: DataSource) => {
  app.post("/user", (req, res) => {
    const user = {
      email: "",
      password: "",
      name: "",
    };

    if (req.body) {
      user.email = req.body?.email;
      user.password = req.body?.password;
      user.name = req.body?.name;
    }

    if (!user.name || !user.password || !user.name) {
      return res.status(400).json({
        message: "Erro ao criar usuário, insira as informações corretas",
      });
    }

    createUser(user, dataSource)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });
};
