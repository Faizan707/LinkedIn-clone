import { z } from 'zod';

export const SignupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;


export const SignInSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

export type SignInSchemaType = z.infer<typeof SignInSchema>