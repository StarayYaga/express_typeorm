import { DataSource } from "typeorm";
import "reflect-metadata"
import dotenv from "dotenv"

dotenv.config()

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.host_db,
    port: Number(process.env.port_db),
    username: process.env.user_db,
    password:process.env.password_db,
    database: process.env.db_name,
    synchronize: true,
    logging: true,
    entities: [__dirname+"/entities/*.ts"],
})

export default AppDataSource