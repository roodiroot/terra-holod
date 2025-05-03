"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { formContactsSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMessageFedback } from "@/actions/sender";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

interface ContactsFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const ContactsForm: React.FC<ContactsFormProps> = ({ className, ...props }) => {
  const form = useForm<z.infer<typeof formContactsSchema>>({
    resolver: zodResolver(formContactsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      policy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formContactsSchema>) {
    await sendMessageFedback(values)
      .then((d) => {
        if (d.succsess) {
          toast(d.succsess);
          return;
        }
        toast(d.error);
      })
      .finally(() => {
        form.reset();
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className={cn("relative space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">
                Имя<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">
                Email <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl">
                Сообщение<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="policy"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div
                className={cn(
                  "ml-4 text-sm",
                  form.formState.errors.policy && "text-red-600 font-bold"
                )}
              >
                Я ознакомлен(а) с{" "}
                <a
                  className="text-[--accent] font-bold"
                  target="_blank"
                  href="/docs/pd-consent"
                >
                  политикой персональных данных
                </a>
                .
              </div>
            </FormItem>
          )}
        />

        <Button className="w-full">Отправить.</Button>
      </form>
    </Form>
  );
};

export default ContactsForm;
