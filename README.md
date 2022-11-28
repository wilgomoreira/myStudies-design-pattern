# myStudies-design-pattern

### Design pattern that I'm studying to improve my codes

1. Factory

2. Observer

3. Strategy

4. Dependency Injection


## Factory

I'm using Factory is functional programming in Javascript, where functions return objects, that can be objetcs or functions.

Do not need to use the keyword new to create object

The advantage is that it makes the code cleaner and easier to write and then read.

Example:

```
import creatApp from "./createApp";

const app = creatApp();

app.start();
app.stop();

```
in other file:

```

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

```

## Observer

In this pattern there is a function that will be the Subject, everything that happens to it, it can communicate to its observers.

These observers decide what they are going to do based on what Subject has done.

The advantage is that it leaves the code with little coupling, which facilitates maintenance and testing.

Example: 

```
function createSubject(){
    const state ={
        observers: [],
    }

    //add observers
    function subscribe(observer){
        if(!state.observers.includes(observer)){
            state.observers.push(observer)
        }
    }

    //remove observer
    function unsubscribe(observerRemove){
        state.observers.filter(observer => observer !== observerRemove)
    }

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

```

Observers:

```
function createObserver(){

    let state = {
        name: "Paul",
        age: 18
    }

    function update(value){
        console.log("the value of observer: Name:" +state.name+ " and age: " +state.age);
        state['name'] = value['name'];
        state['age'] = value['age'];
        console.log("Now, the values was changed " +state.name+ " and age: " +state.age);
    }

    function getValueName(){
        return state.name 
    }

    function setValueName(value){
        return state['name'] = value
    }

    return {
        update,
        getValueName,
        setValueName
    }
}

```
Call the functions:

```
const subject = createSubject();
const observer = createObserver();
subject.subscribe(observer);

const data ={
    name: "Davi",
    age: 1
}
subject.notifyAll(data);

const observeValue = observer.getValueName();
console.log(observeValue);

const newName = observer.setValueName('Lucca')
console.log(`The new name is ${newName}`);

```

## Strategy

In this pattern you create a context function, then create several others that are derived from it

It then creates an object with these derived functions to be executed after the context is created

and so you can choose which function will be executed, according to the desired logic.

Example 

Function Context

```

const transportContext = () => {
    let strategy;

    const setStrategy = (newStrategy) => {
        strategy = newStrategy;
    }

    const getStrategy = () => {
        return strategy;
    }

    const execute = () => {
        return strategy().calculateRoute();
    }

    return {
        getStrategy,
        setStrategy,
        execute
    }
}


```

Functions derived

```

const carStrategy = () => {

   const calculateRoute = () => {
        console.log("the crossing time is 10h");
    }

    return {
        calculateRoute
    }
}

const busStrategy = () => {

    const calculateRoute = () => {
        console.log("the crossing time is 20h");
    }

    return {
        calculateRoute
    }
}

const planeStrategy = () => {

    const calculateRoute = () => {
        console.log("the crossing time is 3h");
    }

    return {
        calculateRoute
    }
}

```

Object with fucntions derived

```
const STRATEGY_MAPPER = {
    car: carStrategy,
    bus: busStrategy,
    plane: planeStrategy
}

```

Call the functions desired

```
const context = transportContext();
const strategy = STRATEGY_MAPPER['plane']
context.setStrategy(strategy);
context.execute();

```

## Dependency Injection
It is not using an external dependency within the code.

The correct thing is to pass this dependency, this injection, through the constructor, through the set... or through the function argument

All this, so that the code is less coupled and can be used wherever you want.

the codes above is using this concept
