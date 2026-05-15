"use server"

import { db } from "./prisma";

export default async function fetchMessages() {
    return await db.message.findMany({
        orderBy : {
            createdAt: 'desc'
        }
    });
}