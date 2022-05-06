export function renderList(list1) {
    const renderLi = document.createElement('li');
    renderLi.textContent = `${list1.ingredient}, ${list1.quantity}, ${list1.measuremet}`;
    return renderLi;
}


export function renderMeal(save) {
    const mealLi = document.createElement('li');
    mealLi.textContent = `${save.mealName}, ${save.save}`;
    return mealLi;
}