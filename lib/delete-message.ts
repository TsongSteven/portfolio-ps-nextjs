"use server"
import { redirect } from "next/navigation";
import { db } from "./prisma";
import { revalidatePath } from "next/cache";

export default async function deleteMessage(id: string) {
    await db.message.delete({
        where: {
            id: id
        }
    })

    revalidatePath("/admin/messages");
    revalidatePath(`/admin/messages/${id}`);

    redirect('/admin/messages');
}