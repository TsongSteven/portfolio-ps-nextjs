"use server"
import { db } from "./prisma";

export default async function fetchPostById(id: string) {
    return await db.post.findUnique({
        where: {
            id: id
        }
    })
}