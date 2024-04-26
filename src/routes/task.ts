import { DataSource } from "typeorm";
import { Express } from "express";
import { CreateTaskDto, createTask } from "../services";

export const taskRoutes = (app: Express, dataSource: DataSource) => {
  app.post("/task", (req, res) => {
    const task: CreateTaskDto = {
      name: "",
    };

    if (req.body) {
      task.name = req.body?.name;
    }

    if (!task.name) {
      res.status(400).json({ message: "erro ao criar task" });
    }

    createTask(task, dataSource)
      .then((task) => {
        res.status(201).json(task);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });
};
