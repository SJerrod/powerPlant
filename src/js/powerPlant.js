class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }
}

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();
const fedPlant = stateControl(blueFood);
> { soil: 5}
blueFood(currentState) // invokes:
// (state) => ({
//   ...state,
//   ["soil"] : (state["soil"] || 0) + 5
// })

const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

const blueFood = changeState("soil")(5);
blueFood(state)
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

// examples
// used our function to easily create more specific functions for each kind of property
// const feed = changeState("soil");
// feed(5)(plant)
// const exampleFood = changeState("soil")(5)(plant)
// (prop)(value)(state)

// not curried
// const changeState = (state, prop, value) => ({
//   ...state,
//   [prop]: (state[prop] || 0) + value
// })

// limited to plants, with 0 any properties not found will be created
// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

// Creates seperate methods with a functional approach:
// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };