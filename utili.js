export function renderList(list1) {
    const renderLi = document.createElement('li');
    renderLi.textContent = `${list1.ingredient}, ${list1.quantity}`;
    return renderLi;
}