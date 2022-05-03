export function renderList(list) {
    const renderLi = document.createElement('li');
    renderLi.textContent = `${list}`;
    return renderLi;
}