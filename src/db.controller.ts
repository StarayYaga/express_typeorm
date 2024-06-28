import AppDataSource from "./orm"
import User from "./entities/user.model"
import { UserDto } from "./dto/user.dto" 

export const Controller = {
    getUsers: async (): Promise<any>=>{
        return await AppDataSource.getRepository(User).find()
    },

    createUser: async (userDto:any): Promise<any>=>{
        const user= await AppDataSource.getRepository(User).create(userDto)
        return await AppDataSource.getRepository(User).save(user)
    },

    updateUser: async(userDto:UserDto): Promise<any>=>{
        const user = await AppDataSource.getRepository(User).findOneBy({
            id: userDto.id
        })
        await AppDataSource.getRepository(User).merge(userDto)
        return await AppDataSource.getRepository(User).save(userDto)
    },
    
    deleteUser: async(id:number): Promise<any>=>{
        return await AppDataSource.getRepository(User).delete(id)
    }
}