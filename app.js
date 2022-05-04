// import functions and grab DOM elements
import { renderList } from './utili.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// Inputs
const addIngredient = document.getElementById('add-ingridients');
const display = document.getElementById('list');
// const addQuantity = document.getElementById('quantity');
// const ingItem = document.getElementById('ingredient');
// const addMeasurement = document.getElementById('list1');



let meals = [];
let list = [];
console.log(list);
addIngredient.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const ingData = new FormData(addIngredient);
    
    let ingr = {
        ingredient: ingData.get('ingredients'),
        quantity: ingData.get('quantity'),
        measuremet: ingData.get('measurementList'),
    };
    list.push(ingr);
    renderAllList();
    console.log(list);
    addIngredient.reset();
});

function renderAllList(){
    display.textContent = '';
    for (let list1 of list){
        const li = renderList(list1);
        display.append(li);
    }

}