
import createConnection from "./createConnection";
import createServer from "./createServer";


function creatApp(){
    const server = createServer();
    const connection = createConnection();

    function start(){
        console.log('Start of project');
        server.start('server 1324');
        connection.start();
    }

    function stop(){
        server.stop();
        connection.stop();
        console.log('Fim do programa');
    }

    return {
        start,
        stop,
    }
}

export default creatApp;
