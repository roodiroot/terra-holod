import { z } from "zod";

export const formPromptSchema = z.object({
  phone: z.string().min(17, { message: "Введите корректный телефон" }),
});
export const formProfileSchema = z.object({
  phone: z.string().min(17, { message: "Введите корректный телефон" }),
  name: z.string().min(2, { message: "Введите корректное имя" }),
});
export const formContactsSchema = z.object({
  name: z.string().min(2, { message: "Введите корректный имя" }).max(20),
  email: z.string().email({ message: "Введите корректную почту" }),
  message: z
    .string()
    .min(3, { message: "Введите корректный телефон" })
    .max(1024),
});
