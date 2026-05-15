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
import fetchMessages from "@/lib/fetch-messages";
export const dynamic = 'force-dynamic';

export default async function Blogs() {

    const messages = await fetchMessages()
    return (
        <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="bg-gray-300 p-2 rounded-xs">
                Messages
            </div>
            <Table>
                <TableCaption>A list of your Messages.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">ID</TableHead>
                        <TableHead>Fullname</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Is Read?</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {messages.map((message, index) => (
                        <TableRow key={message.id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{ message.fullName }</TableCell>
                            <TableCell>{ message.email }</TableCell>
                            <TableCell>{ new Date(message.createdAt).toLocaleDateString() }</TableCell>
                            <TableCell>{ message.isRead ? 'Yes' : 'No' }</TableCell>
                            <TableCell className="text-right">
                                <Button variant={"default"}>
                                    <Link href={`/admin/messages/${message.id}`}>View</Link>
                                </Button>
                                {/* <Button variant={"destructive"}>
                                    <Link href="">Delete</Link>
                                </Button> */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
    )
}