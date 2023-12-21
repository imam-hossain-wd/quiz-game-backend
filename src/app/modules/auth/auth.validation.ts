import { z } from 'zod';
           
const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    role: z.string({
      required_error: 'role is required',
    }),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    })
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required',
    }),
  }),
});




export const AuthValidation = {
  createUserZodSchema,
  loginUserZodSchema,
  refreshTokenZodSchema
};