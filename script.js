// Your code here
const table = document.getElementById('theTable')
const newTr = document.createElement('tr')

function makeRow () {
    table.appendChild(newTr)
    console.log("function")
}

console.log("before event listener")
const addRowButton = document.getElementById('add-row')

addRowButton.addEventListener('click', makeRow)

console.log("after event listener")