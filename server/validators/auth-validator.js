const { z } = require('zod');

const userRegisterSchema = z.object({

    firstname: z
    .string({  required_error: "Firstname is required" })
    .min(3, { message: "Firstname must be at least 3 characters long" })
    .max(20, { message: "Firstname must be at most 20 characters long" }),

    lastname: z
    .string({  required_error: "Lastname is required" })
    .min(3, { message: "Lastname must be at least 3 characters long" })
    .max(20, { message: "Lastname must be at most 20 characters long" }),

    email: z
    .string({  required_error: "Email is required" })
    .email({ message: "Invalid email address" }),

    phone: z
    .string({  required_error: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(10, { message: "Phone number must be at most 10 characters long" }),

    password: z
    .string({  required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),

    cpassword: z
    .string({  required_error: "Confirm password is required" })
    .min(6, { message: "Confirm password must be at least 6 characters long" })
    .max(20, { message: "Confirm password must be at most 20 characters long" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: "Confirm password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),

})


const userLoginSchema = z.object({
    
    email: z
    .string({  required_error: "Email is required" })
    .email({ message: "Invalid Credentials" }),

    password: z
    .string({  required_error: "Password is required" })
    .min(6, { message: "Invalid Credentials" })
    .max(20, { message: "Invalid Credentials" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: "Invalid Credentials" }),

})

module.exports = { userRegisterSchema, userLoginSchema }