// Your code here
const table = document.getElementById('theTable')
const newTr = document.createElement('tr')

function makeRow () {
    table.appendChild(newTr)
}

const addRowButton = document.getElementById('add-row')

addRowButton.addEventListener('click', makeRow)