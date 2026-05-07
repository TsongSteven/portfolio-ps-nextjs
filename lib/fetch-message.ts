"use server"

import { db } from "./prisma";

export async function fetchMessage(id : string) {
    return await db.message.findUnique({
        where : {
            id: id
        }
    })
}

export async function readMessage(id : string) {
    return await db.message.update({
        where : {
            id: id
        },
        data: {
            isRead: true
        }
    })
}