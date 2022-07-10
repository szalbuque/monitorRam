const os = require('os');

// vamos usar algumas propriedades do objeto OS //

// vamos usar o setInterval para atualizar as informações a cada um segundo //
setInterval(()=> {
    // desestruturando o objeto //
    const {arch, platform, totalmem, freemem} = os;

    // totalmem e freemem retorna a qtde em bytes //
    const tRam = parseInt(totalmem()/1024/1024);
    const fRam = parseInt(freemem()/1024/1024);
    const usage = (1-(fRam/tRam))*100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${tRam} MB`,
        FreeRAM: `${fRam} MB`,
        Usage: `${usage.toFixed(2)}%`
    }
    // limpa o console //
   console.clear();
    // mostra o objeto em formato de tabela//
   console.table(stats);
    // exporta um módulo chamado stats que recebe o objeto stats//
    exports.stats = stats;
    
},1000)
