"use server"

import { revalidatePath } from "next/cache";
import { db } from "./prisma";

export default async function fetchMessages() {
    return await db.message.findMany();
    revalidatePath("/admin/messages");
}