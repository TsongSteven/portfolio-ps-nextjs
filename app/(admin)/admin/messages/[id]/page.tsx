import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchMessage, readMessage } from "@/lib/fetch-message";
import deleteMessage from "@/lib/delete-message";
export const revalidate = 0;
export default async function viewMsg({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const msg = await fetchMessage(id);

  readMessage(id);

  return (
    <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Name: {msg?.fullName}</CardTitle>
          <CardDescription>Email: {msg?.email}</CardDescription>
        </CardHeader>
        <CardContent>{msg?.msg}</CardContent>
        <CardFooter>
          <form action={deleteMessage.bind(null, id)}>
            <Button variant={"destructive"} type="submit">
              Delete
            </Button>
          </form>
        </CardFooter>
      </Card>
    </section>
  );
}
