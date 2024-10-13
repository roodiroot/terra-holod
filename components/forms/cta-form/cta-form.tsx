"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { formPromptSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";
import { Form, FormControl } from "@/components/ui/form";
import InputPhoneMask from "@/components/ui/input-phone-mask";

interface CtaFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const CtaForm: React.FC<CtaFormProps> = ({ className, ...props }) => {
  const form = useForm<z.infer<typeof formPromptSchema>>({
    resolver: zodResolver(formPromptSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formPromptSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className={cn("relative", className)}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="h-[50px] pr-6 rounded-full border-2 border-gray-800 flex gap-4">
            <Icons.consultant
              className={cn(
                "w-6 stroke-slate-200 ml-4",
                form.formState.errors?.phone && " stroke-red-500"
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormControl>
                  <InputPhoneMask
                    setValue={onChange}
                    value={value}
                    className={cn(
                      "border-none mt-0.5 outline-none h-full bg-inherit flex-1 font-medium text-[--accent] placeholder:text-gray-200"
                    )}
                  />
                </FormControl>
              )}
            />
          </div>
          <Button>Отправить</Button>
        </div>
        {form.formState.errors?.phone && (
          <div className="absolute top-full left-0 text-[0.8rem] font-medium text-red-500 dark:text-red-900">
            {form.formState.errors?.phone.message}
          </div>
        )}
      </form>
    </Form>
  );
};

export default CtaForm;
