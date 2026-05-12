"use server"
import { redirect } from "next/navigation";
import { db } from "./prisma";

export default async function deletePost(id: string) {
    await db.post.delete({
        where : {
            id : id
        }
    })

    redirect('/admin/blogs')
}