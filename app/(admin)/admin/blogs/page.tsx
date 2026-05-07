"use server"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import fetchPosts from "@/lib/fetch-posts";

export default async function Blogs() {

    const posts = await fetchPosts()
    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="bg-gray-300 p-2 rounded-xs">
                Blogs
            </div>
            <div className="mt-2 mb-2">
                <Button>
                    <Link href='/admin/blogs/create'>+ Add blog</Link>
                </Button>
            </div>
            <Table>
                <TableCaption>A list of your Blogs.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Created at</TableHead>
                        <TableHead>is Published</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((post, index) => (
                        <TableRow key={post.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{ post.title }</TableCell>
                            <TableCell>{ new Date(post.createdAt).toLocaleString() }</TableCell>
                            <TableCell>{ post.published ? 'Published' : 'Not published' }</TableCell>
                            <TableCell className="text-right">
                                <Button variant={"default"}>
                                    <Link href="">View</Link>
                                </Button>
                                <Button variant={"secondary"}>
                                    <Link href={`/admin/blogs/${post.id}/edit`}>Edit</Link>
                                </Button>
                                <Button variant={"destructive"}>
                                    <Link href="">Delete</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}