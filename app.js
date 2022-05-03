// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// Inputs
const addIngredient = document.getElementsById('add-ingridients');
const addQuantity = document.getElementById('quantity');
const addMeasurement = document.getElementById('list');

//Buttons
const saveEl = document.getElementById('save');
const meal = document.getElementById('mealSaved');

let meals = [];
let list= [];

addIngredient.addEventListener('submit', (e) => {
    e.preventDefault(),
    const ingData = new FormData(addIngredient);
    let ingr = {
      name: ingData.get('ingredient')};
      list.push('List of ingredients', ingr);
      console.log(ingData.get('ingredient'));

      

});