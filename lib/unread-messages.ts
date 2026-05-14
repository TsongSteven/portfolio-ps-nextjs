import { db } from "./prisma";

export default async function getNoOfUnreadMsgs() {
    return await db.message.count({
        where : {
            isRead : false
        }
    });
}