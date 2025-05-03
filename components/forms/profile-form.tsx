"use client";

import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { formProfileSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import { sendMessagePopup } from "@/actions/sender";
import useModal from "@/hooks/use-modal";
import { Switch } from "../ui/switch";

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const { onClose } = useModal();
  const form = useForm<z.infer<typeof formProfileSchema>>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      phone: "",
      name: "",
      policy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formProfileSchema>) {
    await sendMessagePopup(values)
      .then((d) => {
        if (d.succsess) {
          toast(d.succsess);
          return onClose();
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
        className={cn("grid items-start gap-4", className)}
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
          name="phone"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel className="text-xl">
                Телефон<span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <InputPhoneMask
                  setValue={onChange}
                  value={value}
                  className={cn(
                    "flex h-[50px] w-full rounded-full border border-gray-200 bg-white px-6 py-2 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-950 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:file:text-gray-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
                  )}
                />
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
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  );
}

export default ProfileForm;
