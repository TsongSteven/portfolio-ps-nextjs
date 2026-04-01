"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldSet, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z, { email } from "zod";
import { loginAction } from "./actions";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().nonempty('Email ID cannot be empty.').email('Invalid email address.'),
    password: z.string().min(1, "Password cannot be empty.")
})

export default function login() {

    const [error, setError] = useState('')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    async function onSubmit(data: z.infer<typeof formSchema>) {
        setError("")
        const result = await loginAction(data);

        if (result?.error) {
            setError(result.error)
        }
    }

    return (
        <section className="flex justify-center mt-10 mb-10">
            <div className="w-full md:w-1/3">
                <Card>
                    <CardHeader>
                        <CardTitle>Log In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {error && (
                            <FieldError errors={[{ message: error }]} className="mb-4" />
                        )}
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldSet>
                                <FieldGroup>
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Email</FieldLabel>
                                                <Input {...field} type="text" id="email" name="email" />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="password"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Password</FieldLabel>
                                                <Input {...field} type="password" name="password" />
                                                {fieldState.invalid && (
                                                    <FieldError errors={[fieldState.error]} />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Button type="submit">Log in</Button>
                                </FieldGroup>
                            </FieldSet>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}