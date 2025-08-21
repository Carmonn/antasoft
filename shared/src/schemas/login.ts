import { z } from 'zod';

export const LoginPostSchema = z.object({
  correo: z.email(),
  password: z.string().min(8).max(50)
});

export type ILoginPost = z.infer<typeof LoginPostSchema>;

export const LoginGetSchema = z.object({
  correo: z.email()
});

export type ILoginGet = z.infer<typeof LoginGetSchema>;
