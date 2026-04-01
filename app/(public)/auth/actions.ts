"use server"

import { AuthError } from "next-auth";
import { signIn } from "../../auth"

export async function loginAction(data: { email: string, password: string }) {
    try {
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirectTo: "/admin", //for now I have no place to redirect so, just for debug
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