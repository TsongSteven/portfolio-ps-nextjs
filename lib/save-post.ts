"use server"
import { auth } from "@/auth";
import { db } from "./prisma";
import { redirect } from "next/navigation";
import getUserByEmail from '@/lib/user';
import slugify from 'slugify';

export default async function saveBlog(title: string, post_type: string, content: string) {

    const session = await auth()

    if (!session) redirect("/")

    const email = session.user.email
    const user = await getUserByEmail(email as string)

    if (!user) redirect("/")

    const res = await db.post.create({
        data: {
            title: title,
            content: content,
            slug: slugify(title),
            postType: post_type,
            authorId: user?.id
        }
    })

    if (res) {
        redirect('/admin/blogs')
    }
}