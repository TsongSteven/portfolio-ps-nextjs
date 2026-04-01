import AdminSidebar from "@/components/admin-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import React from "react";
import './../../globals.css';

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
            suppressHydrationWarning
            className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-mono", jetbrainsMono.variable)}>
            <body suppressHydrationWarning>
                <SidebarProvider>
                    <AdminSidebar />
                    <SidebarInset>
                        <main>{children}</main>
                    </SidebarInset>
                </SidebarProvider>
            </body>
        </html>
    )
}