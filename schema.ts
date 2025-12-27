import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  message: z.string().min(10),
});
