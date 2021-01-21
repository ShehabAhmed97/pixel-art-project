// Select color input
let colorSelector=document.getElementById("colorPicker");
let colorSelected=document.getElementById("colorPicker").value;
colorSelector.addEventListener('input',function(e){
    colorSelected=e.target.value;
    e.preventDefault;
},true)

// Select size input
document.getElementById('sizePicker').addEventListener('submit',makeGrid)

//function runs when the user submits the size of grid
function makeGrid(event) {

    //get number of grid rows
    let gridHeight = document.getElementById("inputHeight").value

    //get number of grid rows
    let gridWidth = document.getElementById("inputWidth").value

    //adding cells of the the grid according to size provided from user
    for(i=0;i<=gridHeight-1;i++){
        document.getElementById('pixelCanvas').insertAdjacentHTML('beforeend','<tr class="tableRow"></tr>')
        for(j=0;j<=gridWidth-1;j++){
            document.querySelectorAll('.tableRow')[i].insertAdjacentHTML('beforeend','<td class="cell"></td>')
        }
    }

    //get total number of cells 
    let cells=document.querySelectorAll('.cell')

    //changing color of cells on click of user, to the color that user picked
    for(x=0;x<=cells.length-1;x++){
        cells[x].addEventListener('click',function(ev){
            ev.target.setAttribute('style',`background-color:${colorSelected}`)
            ev.preventDefault();
        })
    }
    event.preventDefault()
}
// Your code goes here!




