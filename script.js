// Your code here
const table = document.getElementById("theTable");

function makeRow() {
  const newTr = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    newTr.appendChild(td);
  }
  table.appendChild(newTr);
}

const addRowButton = document.getElementById("add-row");

addRowButton.addEventListener("click", makeRow);

function colorize(clickEvent) {
  const target = clickEvent.target;
  if (clickEvent.target.matches("td")) {
    if (target.className.length) {
      target.className = "";
    } else {
      clickEvent.target.className = "red";
    }
  }
}

table.addEventListener("click", colorize);
