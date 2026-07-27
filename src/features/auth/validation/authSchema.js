import {z} from "zod";
export const registerSchema = z.object({
    name: z.string()
           .min(3, "Name must be at leat 3 character")
           .max(50, "Name must be at most 50 character"),
    email: z.email("Please enter a valid email address"),
    password: z
        .string()
        .min(8, "Password must be at leat 8 characters")
        .max(100, "Password must be at most 100 characters")

})

export const loginSchema = registerSchema.pick({
    email: true,
    password: true
})