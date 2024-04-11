import { Administrador } from "./Administrador.js";
import { Usuario } from "./Usuario.js";

const adm = new Administrador("usuario01","123456");
const user = new Usuario("usuariousuario","12345");

// adm.saudar();
// user.saudar();

// adm.resetarSenhaUsuario(user);

// console.log(user.senha);

// user.alterarSenha("123qweasd","senhaPadrao");

adm.definaVoce("Fabricio")
user.definaVoce()