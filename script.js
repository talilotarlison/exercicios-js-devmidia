/*https://www.w3schools.com/js/js_strict.asp
  
"use strict";Define que o código JavaScript deve ser executado em "modo estrito".

A Diretiva "use estrito"
A "use strict"diretiva era nova no ECMAScript versão 5.

Não é uma declaração, mas uma expressão literal, ignorada pelas versões anteriores do JavaScript.

O objetivo "use strict"é indicar que o código deve ser executado em "modo estrito".

Com o modo estrito, você não pode, por exemplo, usar variáveis não declaradas.*/

import {somar} from "./filmes.js";

console.log(somar(2,4));
