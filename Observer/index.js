
//Criando o Assunto que quando mudar algo, notificará os observers.
function createSubject(){

    const state ={
        observers: [],
    }

    //inscreve os observers
    function subscribe(observer){
        if(!state.observers.includes(observer)){
            state.observers.push(observer)
        }
    }

    //remove observer
    function unsubscribe(observerRemove){
        state.observers.filter(observer => observer !== observerRemove)
    }

    //Notifica todos sobre a mundaça com o valor que foi modificado
    function notifyAll(value){
        console.log(`Notificando todos os ${state.observers.length} observers `);
        state.observers.forEach(observer => observer.update(value))
    }

    return {
        subscribe,
        subscribe,
        notifyAll
    }
}

//Criando a função do observer
function createObserver(){

    let state = {
        nome: "Rodrigo",
        idade: 18
    }

    function update(value){
        console.log("O valor do observer era: Nome:" +state.nome+ " e idade: " +state.idade);
        state['nome'] = value['nome'];
        state['idade'] = value['idade'];
        console.log("Agora, o valor do observer foi alterado para: " +state.nome+ " e idade: " +state.idade);
    }

    function getValueNome(){
        return state.nome 
    }

    function setValueNome(value){
        return state['nome'] = value
    }

    return {
        update,
        getValueNome,
        setValueNome
       
    }
}

const subject = createSubject();
const observer = createObserver();
subject.subscribe(observer);

const dados ={
    nome: "Davi",
    idade: 1
}
subject.notifyAll(dados);

const observeValue = observer.getValueNome();
console.log(observeValue);

const novoNome = observer.setValueNome('Lucas')
console.log(`O novo nome é ${novoNome}`);





