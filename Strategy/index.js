
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

const carStrategy = () => {

   const calculateRoute = () => {
        console.log("O tempo de travessia é de 10h");
    }

    return {
        calculateRoute
    }
}

const busStrategy = () => {

    const calculateRoute = () => {
        console.log("O tempo de travessia é de 20h");
    }

    return {
        calculateRoute
    }
}

const planeStrategy = () => {

    const calculateRoute = () => {
        console.log("O tempo de voo é de 3h");
    }

    return {
        calculateRoute
    }
}

const STRATEGY_MAPPER = {
    car: carStrategy,
    bus: busStrategy,
    plane: planeStrategy
}

const context = transportContext();
const strategy = STRATEGY_MAPPER['plane']
context.setStrategy(strategy);
context.execute();










