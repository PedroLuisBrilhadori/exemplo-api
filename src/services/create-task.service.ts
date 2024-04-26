import { DataSource } from "typeorm";
import { Task } from "../models";

export type CreateTaskDto = {
  name: string;
};

export const createTask = async (
  dto: CreateTaskDto,
  dataSource: DataSource,
) => {
  const repository = dataSource.getRepository(Task);

  const task = repository.create(dto);

  await repository.save(task);

  return task;
};
