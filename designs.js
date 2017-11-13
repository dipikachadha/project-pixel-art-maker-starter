$(document).ready(function() {
  // Select color input
  let colorInput = document.getElementById("colorPicker").value

  // When size is submitted by the user, call makeGrid()

  document.getElementsByTagName("input")[2].addEventListener("click",
  function(event) {
    event.preventDefault();
    let gridHeight = document.getElementById("input_height").value;
    let gridWidth = document.getElementById("input_width").value;

    function makeGrid() {
      let grid = '';
      for(let i = 0; i < gridHeight; i++) {
        grid +="<tr>";
        for(let j = 0; j< gridWidth; j++) {
          grid +="<td></td>";
        }
        grid +="</tr>";
      }
      document.getElementById("pixel_canvas").innerHTML = grid;
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
    event.target.style.backgroundColor = colorInput;
  });
});
