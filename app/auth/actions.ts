"use server"

import { AuthError } from "next-auth";
import { signIn } from "./../../app/auth"

export async function loginAction(data: { email: string, password: string }) {
    try {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirectTo: "/contact",
        })
    } catch (error) {
        if (error instanceof AuthError) {
            if (error.type === "CredentialsSignin") {
                return { error: "Invalid email or password" }
            }
        }

        throw error; 
    }
}