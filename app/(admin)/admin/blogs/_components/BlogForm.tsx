"use client"
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import QuillEditor from "@/components/quill-editor";
import { Button } from "@/components/ui/button";
import { SaveIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import saveBlog from "@/lib/save-post";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import editBlog from "@/lib/edit-post";

const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").trim();
};

const blogSchema = z.object({
    title: z.string()
        .min(30, "Title must be at least 30 characters.")
        .max(60, "Title must be at leaset 60 character."),
    content: z.string()
        .refine((val) => stripHtml(val).length > 0, {
            message: "Content is required",
        }),
})


export default function BlogForm({ blogData }: { blogData?: any }) {
    const form = useForm<z.infer<typeof blogSchema>>({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            title: blogData?.title || "",
            content: blogData?.content || ""
        }
    })

    function onSubmit(data: z.infer<typeof blogSchema>) {
        if (blogData) {
            editBlog(data.title, data.content, blogData.id)
        } else {
            saveBlog(data.title, data.content)
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldSet>
                <FieldGroup>
                    <FieldGroup>
                        <Controller
                            name="title"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Title</FieldLabel>
                                    <Input {...field} type="text" />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="content"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Content</FieldLabel>
                                    <QuillEditor
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                    {fieldState.error && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </FieldGroup>
            </FieldSet>
            <div className="mt-15">
                <Button type="submit">
                    <SaveIcon></SaveIcon>
                    {blogData ? 'Update' : 'Save'}
                </Button>
            </div>
        </form>
    )
}