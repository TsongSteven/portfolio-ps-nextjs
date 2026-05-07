"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import saveMsg from "@/lib/save-message";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  full_name: z
    .string()
    .min(3, "Name must be at least 3 char.")
    .nonempty("Name is required."),
  email: z.email("Invalid email address").nonempty("Email is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 char.")
    .nonempty("Message is required."),
});

export default function Contact() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const res = await saveMsg(data.full_name, data.email, data.message);

    if (res.success) {
      form.reset();
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res.message);
    }
  }

  return (
    <section className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <Image
            src="/image/contact.png"
            alt="contact pranan"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Let’s connect if you have any questions or ideas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FieldSet>
                  <FieldGroup>
                    <Controller
                      name="full_name"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel>Full name</FieldLabel>
                          <Input
                            {...field}
                            type="text"
                            id="full-name"
                            name="full_name"
                            placeholder="John Doe"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="email"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            {...field}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@email.com"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      name="message"
                      control={form.control}
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel>Message</FieldLabel>
                          <Textarea
                            {...field}
                            id="message"
                            name="message"
                            placeholder="message"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                </FieldSet>
                <FieldSet className="mt-3">
                  <Field>
                    <Button type="submit">Submit</Button>
                  </Field>
                </FieldSet>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
