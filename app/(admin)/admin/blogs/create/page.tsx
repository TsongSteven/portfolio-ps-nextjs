"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlogForm from "../_components/BlogForm";


export default function CreateBlog() {
    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <Card>
                <CardHeader>
                    <CardTitle>Create blog</CardTitle>
                </CardHeader>
                <CardContent>
                    <BlogForm />
                </CardContent>
            </Card>
        </section >
    )
}