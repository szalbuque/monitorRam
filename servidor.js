// importa o módulo http //
const http = require('http');
const host = 'http://localhost';
const port = 3000;
// importa o módulo stats do arquivo pcRamUsage.js que criamos //
const stats = require("./pcRamUsage.js");
console.log(stats);

// cria um servidor http, uma requisição e uma resposta que mostra a tag //
// h1 com a palavra Working //
// Para ver funcionando, abrir o navegador e acessar localhost:3000 //

http.createServer((req, res) => {
    let url = req.url;
    if (url === "/stats") {
        res.end(JSON.stringify(stats,null,2));
    } else {
        res.end("<h1>Pagina inicial</h1>");
    }
    
}).listen(port, ()=> 
console.log(`Server is running in ${host}:${port}`));
