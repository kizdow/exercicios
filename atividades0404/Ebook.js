import { Livro } from './Livro.js'

export class Ebook extends Livro {
    constructor (titulo,ano,autor,formatoArquivo) {
        super(titulo,autor,ano)
        this.formatoArquivo = formatoArquivo;

    }
    

    exibirInfo () {
        console.log(` em ${this.formatoArquivo}`)
    }
}