// Your code here


//////// The function that adds a row of pixels to the table. ////////
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


///////// The function that toggles the color of an individual cell. ///////
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


//////// The function that changes the color based on the option chosen in the drop-down menu. ////////

const select = document.getElementsByTagName("select")[0];

select.addEventListener('change', function (event) {
  color = event.target.value;
});


