"use server";

import { db } from "./prisma";

export default async function fetchVb() {
  return await db.post.findMany({
    orderBy: {
      createdAt: "asc",
    },
    where: {
      postType: "Vision Board",
    },
  });
}
