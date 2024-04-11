import { Usuario } from "./Usuario.js";

export class Administrador extends Usuario {
    constructor(nome,senha){
        super(nome, senha) //chama o constructor da classe pai
    }

    resetarSenhaUsuario (usuario) {
        usuario.resetarSenha()
    }

    definaVoce(nome) {
        console.log(`Eu sou um usuário poderoso,sou adm! ${nome}`)

    }
}

