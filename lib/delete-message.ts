"use server"
import { redirect } from "next/navigation";
import { db } from "./prisma";

export default async function deleteMessage(id: string) {
    await db.message.delete({
        where : {
            id : id
        }
    })

    redirect('/admin/messages')
}