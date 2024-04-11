export class Livro {
    #titulo
    #ano
    #autor
    constructor(titulo, autor, ano) {
        this.#titulo = titulo
        this.#ano = ano
        this.#autor = autor
    };

    get titulo () {
        return this.#titulo;
    }

    get ano () {
        return this.#ano;
    }

    get autor () {
        return this.#autor;
    }

    set ano(ano) {
        this.#ano = ano
    };
    

    exibirInfo () {
        console.log(`O título do livro é ${this.titulo}, 
        escrito por ${this.#autor},
        e publicado no ano de ${this.#ano}`)
    };

};


