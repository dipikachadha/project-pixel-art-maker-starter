$(document).ready(function() {
  // Select color input
  let colorInput = document.getElementById("colorPicker").value

  // When size is submitted by the user, call makeGrid()

  document.getElementsByTagName("input")[2].addEventListener("click",
  function(event) {
    event.preventDefault();
    const gridHeight = document.getElementById("input_height").value;
    const gridWidth = document.getElementById("input_width").value;

    function makeGrid() {
      const grid = document.getElementById("pixel_canvas");
      for(let i = 0; i < gridHeight; i++) {
        const row = grid.insertRow(i);
        for(let j = 0; j < gridWidth; j++) {
          row.insertCell(j);
        }
      }
    }
    makeGrid();
  });

  //make color picker event listener
  document.getElementById("colorPicker")
  .addEventListener("change",function(event){
    colorInput = document.getElementById("colorPicker").value;
  });

  //make the td cells selectable / colorable
  document.getElementById("pixel_canvas")
   .addEventListener("click",function(event){
     if (event.target && event.target.nodeName == "TD") {
      event.target.style.backgroundColor = colorInput;
     }
  });
});
