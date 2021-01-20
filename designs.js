// Select color input
// Select size input
let colorSelected = document.getElementById("colorPicker").value
var gridHeight = document.getElementById("inputHeight").value
var gridWidth = document.getElementById("inputWidth").value
// When size is submitted by the user, call makeGrid()

function makeGrid() {
    for(i=1;i<=gridHeight;i++){
        document.getElementById('pixelCanvas').insertAdjacentHTML('beforeend','<tr id="tableRow"><td>i</td></tr>')
    }

// Your code goes here!

}

document.getElementById('submit').addEventListener('click',function(event){makeGrid();event.preventDefault})