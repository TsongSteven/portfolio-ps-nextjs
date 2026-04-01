import { db } from "./prisma"

export default function getUserByEmail(email : string)
{
    return db.user.findFirst({
        where : { email }
    }) 
}