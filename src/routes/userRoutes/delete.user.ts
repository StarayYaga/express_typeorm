import {Request, Response} from "express"
import {Controller} from "../../db.controller"


export async function deleteUser(req: Request,res:Response):Promise<void>{
    res.json(await Controller.deleteUser(req.body.id))
}