import dataSource from "./utils";
import { Wilder } from "./entity/wilder";

const start = async (): Promise<void> => {
  await dataSource.initialize();
  await dataSource.dropDatabase();
  await dataSource.synchronize();
  await dataSource.getRepository(Wilder).save({ name: "test" });
  console.log(await dataSource.getRepository(Wilder).find());
};

void start();
