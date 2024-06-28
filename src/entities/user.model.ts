import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "users"})
class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

}

export default User