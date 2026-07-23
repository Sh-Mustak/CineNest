import {z} from "zod";
export const registerSchema = z.object({
    name: z.string().min(3, "Name must be at leat 3 character"),
    email: z.email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at leat 8 characters")

})