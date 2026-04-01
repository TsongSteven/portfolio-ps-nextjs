"use server"
import { auth } from "@/auth";
import { db } from "./prisma";
import { redirect } from "next/navigation";
import getUserByEmail from '@/lib/user';
import slugify from 'slugify';

export default async function editBlog(title: string, content: string, blogId: string) {

    const session = await auth()

    if (!session) redirect("/")

    const email = session.user.email
    const user = await getUserByEmail(email as string)

    if (!user) redirect("/")

    const res = await db.post.update({
        where: {
            id: blogId
        },
        data: {
            title: title,
            content: content,
            slug: slugify(title),
            authorId: user?.id
        }
    })

    if (res) {
        redirect('/admin/blogs')
    }
}