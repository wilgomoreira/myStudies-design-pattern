
function createConnection(){

    function start(){
        console.log('Iniciando a conexão');
    }

    function stop(){
        console.log('Finalizando a conexão');
    }

    return {
        start,
        stop
    }

}

export default createConnection;