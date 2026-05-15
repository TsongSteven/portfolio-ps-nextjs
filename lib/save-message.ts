"use server"

import { db } from "./prisma";

export default async function saveMsg(full_name: string, email: string, message: string) {
    try {
        await db.message.create({
            data: {
                fullName: full_name,
                email: email,
                msg: message,
            }
        })
        return ({success: true, message: "Message sent successfully!"});
    } catch (error) {
        return { success: false }
    }
}