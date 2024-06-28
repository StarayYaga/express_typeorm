import {Request, Response} from "express"
import {Controller} from "../../db.controller"


export async function createUser(req: Request,res:Response):Promise<void>{
    res.json(await Controller.createUser(req.body.name))
}