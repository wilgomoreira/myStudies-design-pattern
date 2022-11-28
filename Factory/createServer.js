
function createServer(){
    const servidores = {
        servidor1: () => console.log('Inicializando o servidor 1'),
        servidor2: () => console.log('Inicializando o servidor 2'),
        servidor3: () => console.log('Inicializando o servidor 3'),
        servidor4: () => console.log('Inicializando o servidor 4'),
    }

    let server = null;

    function start(servidor){
        server = servidores[servidor];

        //validação
        if(!server){
            return console.log('Servidor não encontrado');
        }
        return server(); 
    }

    function stop(){
        if(server){
            console.log('Parando o servidor de rodar');
        }
            
    }

    return {
        start,
        stop
    }
}

export default createServer