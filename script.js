// Your code here
const table = document.getElementById('theTable')

function makeRow () {
    const newTr = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        newTr.appendChild(td)
    }
    table.appendChild(newTr)
    
}


const addRowButton = document.getElementById('add-row')

addRowButton.addEventListener('click', makeRow)

function colorize(clickEvent) {
if (clickEvent.target.matches("td")) {
    console.log("clicked!")
}
}

table.addEventListener('click', colorize)