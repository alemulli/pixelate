// Your code here
const table = document.getElementById("theTable");
let color = "red";

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

const select = document.getElementsByTagName("select");

select.addEventListener('change', function (event) {
  color = event.target.value;
});

function colorize(clickEvent) {
  const target = clickEvent.target
  if (clickEvent.target.matches("td")) {
    if (target.className.length) {
      target.className = "";
    } else {
      target.className = color;
    }
  }
}
table.addEventListener("click", colorize);
