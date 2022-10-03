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

let mouseDown = false; 
  document.body.onmousedown = () => {mouseDown = true;};
  document.body.onmouseup = () => {mouseDown = false;};

table.addEventListener("mousedown", function (event) {colorize(event)});
table.addEventListener("mouseover", function (event) {
  if (mouseDown === true) {colorize(event)}});



//////// The function that changes the color based on the option chosen in the drop-down menu. ////////

const select = document.getElementsByTagName("select")[0];

select.addEventListener('change', function (event) {
  color = event.target.value;
});


///// Clear Grid Button //////

const clearButton = document.getElementById("clear-grid");

const tdArray = document.getElementsByTagName("td")

function clearTheGrid () {
  for (let i = 0; i < tdArray.length; i++) {
    tdArray[i].className = "";
  }
}

clearButton.addEventListener("click", clearTheGrid);


/////// Fill Buttons ////////

const fillAllButton = document.getElementById("fill-All")

function fillAll () {
  for (let i = 0; i < tdArray.length; i++) {
    tdArray[i].className = color;
  }
}

fillAllButton.addEventListener("click", fillAll);

const fillAllBlankPixels = document.getElementById("fill-all-blank")

function fillAllBlank () {
  for(let i = 0; i < tdArray.length; i++) {
    if (tdArray[i].className.length) {
      console.log("I'm not doing anything")
    } else {
      tdArray[i].className = color;
    }
  }
}

fillAllBlankPixels.addEventListener("click", fillAllBlank);