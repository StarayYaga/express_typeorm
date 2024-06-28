
import {Request, Response, Router} from "express"

export const router = Router()

router.get("/", (req: Request, res: Response):void=>{
    res.end("hello")
})
