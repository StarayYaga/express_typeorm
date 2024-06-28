import {Request, Response} from "express"
import {Controller} from "../../db.controller"


export async function updateUser(req: Request,res:Response):Promise<void>{
    res.json(await Controller.updateUser(req.body))
}