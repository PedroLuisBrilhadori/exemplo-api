import { DataSource } from "typeorm";
import { User } from "../models";

export type CreateUserDto = {
  email: string;
  password: string;
  name: string;
};

export const createUser = async (
  dto: CreateUserDto,
  dataSource: DataSource,
) => {
  const repository = dataSource.getRepository(User);

  const user = repository.create(dto);

  await repository.save(user);

  return user;
};
