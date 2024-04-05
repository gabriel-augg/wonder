export default function errorHandling(error) {
    let message = "";

    if (error.includes("user-not-found")) {
        message = "Usuário não encontrado!";
    } else if (error.includes("incorrect-password")) {
        message = "Senha incorreta!";
    } else if (error.includes("unexpected-error")) {
        message = "Ocorreu um erro inesperado!";
    } else if (error.includes("server-issue")) {
        message = "Erro de conexão com o servidor!";
    } else if(error.includes("username-unavailable")){
        message = "Nome de usuário indisponível!"
    } else if(error.includes("email-unavailable")){
        message = "O email já está em uso!"
    } else if(error.includes("password-conflict")){
        message = "As senhas não conhecidem!"
    }

    return message;
}
