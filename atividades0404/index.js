import { Ebook } from './Ebook.js'
import { Livro } from './Livro.js'


const livro01 = new Livro("Harry Potter","J. K. Rouliwn","1996")
const livro02 = new Livro("como treinar seu dragão","Henry kevil","2001")

// livro01.exibirInfo()
// livro02.exibirInfo()
// livro01.ano("2000")
livro01.exibirInfo()

const ebook01 = new Ebook ('O calice de fogo','2001','Pedro Pascas','pdf')

ebook01.exibirInfo()

ebook01.exibirDetalhes()
