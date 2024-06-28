import express, { Express } from "express";
import router from "./routes/router"
import AppDataSource from "./orm"
import dotenv from "dotenv"

dotenv.config()
const app: Express = express()
const port = process.env.port

AppDataSource
    .initialize()
    .then(()=>{
        console.log("ORM initialize!");
    }).catch((e)=>{
        console.error("Error in orm - ", e)
    })

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});