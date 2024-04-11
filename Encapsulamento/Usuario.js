export class Usuario {
    #nome; // Atributo privado que armazena nome
    #senha; // Atributo privado que armazena nome

    constructor(nome,senha){
        this.#nome = nome;
        this.#senha = senha;
    }

    get senha(){
        return this.#senha;
    }

    definaVoce() {
        console.log("Eu sou um usuário comum!")
    }

    resetarSenha () {
        this.#senha = 'senhaPadrao';
        console.log(`A senha foi redefinida para 'senhaPadrao'`)
    }

    // * Método privado, apenas o sistema o acessa *
    #verificarSenha (senha) {
        return this.#senha === senha;
    }

    alterarSenha (novaSenha, senhaAtual) {
        if (this.#verificarSenha(senhaAtual)) {
            this.#senha = novaSenha;
            console.log(`Senha alterada com sucesso para ${this.#senha}`);
        }else {
            console.log(`Senha atual incorreta.`);
        };
    };

    // Método público
    saudar() {
        console.log(`Olá, meu nome é ${this.#nome}`)
    };

};

