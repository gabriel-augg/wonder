import { z } from "zod"

const editUserSchema = z.object({
    username: 
        z.string()
        .nonempty("O nome de usuário é obrigatório.")
        .min(3, "O nome de usuário deve ter pelo menos 3 caracteres.")
        .max(20, "O nome de usuário não pode ser maior que 20 caracteres."),

    email: 
        z.string()
        .nonempty("O email é obrigatório.")
        .email("Digite um email válido."),
    
    description: 
    z.string()
    .max(50, "A descrição não pode ser maior que 50 caracteres."),

    password: 
        z.string(),
    
    confirmpassword:
        z.string(),
})

const signInSchema = z.object({
    email: 
        z.string()
        .nonempty("O email é obrigatório."),

    password: 
        z.string()
        .nonempty("O senha é obrigatória.")
})

const signUpSchema = z.object({
    username: 
        z.string()
        .nonempty("O nome de usuário é obrigatório.")
        .min(3, "O nome de usuário deve ter pelo menos 3 caracteres.")
        .max(20, "O nome de usuário não pode ser maior que 20 caracteres."),

    email: 
        z.string()
        .nonempty("O email é obrigatório.")
        .email("Digite um email válido."),

    password: 
        z.string()
        .nonempty("O senha é obrigatória.")
        .min(4, "A senha deve ter pelo menos 8 caracteres."),
    
    confirmpassword:
        z.string()
        .nonempty("A confirmação de senha é obrigatória.")
})

export {signUpSchema, signInSchema, editUserSchema};