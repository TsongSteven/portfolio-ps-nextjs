"use server"

import { db } from "./prisma";

export default async function fetchPosts()
{
   return await db.post.findMany({
    orderBy : {
        createdAt: 'desc'
    }
   }) 
}