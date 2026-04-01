import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogForm from "../../_components/BlogForm";
import fetchPostById from "@/lib/fetch-post";


export default async function EditBlog({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    const blog = await fetchPostById(id)

    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <Card>
                <CardHeader>
                    <CardTitle>Edit blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <BlogForm blogData={blog} />
                </CardContent>
            </Card>
        </section >
    )
}