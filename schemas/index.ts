import { z } from "zod";

export const formPromptSchema = z.object({
  phone: z.string().min(17, { message: "Введите корректный телефон" }),
});
