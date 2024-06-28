import { getUsers } from "./userRoutes/get.users"
import { createUser } from "./userRoutes/add.user"
import { updateUser } from "./userRoutes/update.user"
import { deleteUser } from "./userRoutes/delete.user"
import {Request, Response, Router} from "express"

const router = Router()

router.get("/users", async (req: Request, res: Response):Promise<void>=>{
    await getUsers(req, res)
})

router.post("/user", async (req: Request, res: Response):Promise<void>=>{
    await createUser(req, res)
})

router.put("/user", async (req: Request, res: Response):Promise<void>=>{
    await updateUser(req, res)
})

router.delete("/user", async (req: Request, res: Response):Promise<void>=>{
    await deleteUser(req, res)
})


export default router

