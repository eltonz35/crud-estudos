import { DataSource } from "typeorm";

export const appDataSouce = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "elthon",
    password: "elthon123",
    database: "softex",
});
