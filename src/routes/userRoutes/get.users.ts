import {Request, Response} from "express"
import {Controller} from "../../db.controller"

export async function getUsers(req: Request,res:Response):Promise<void>{
    res.json(await Controller.getUsers())
}