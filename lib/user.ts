import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./generated/prisma/client"

const adapter = new PrismaPg({
    connectionString : process.env.DATABASE_URL
})

const prisma = new PrismaClient({ adapter })

export default function getUserByEmail(email : string)
{
    return prisma.user.findFirst({
        where : { email }
    }) 
}