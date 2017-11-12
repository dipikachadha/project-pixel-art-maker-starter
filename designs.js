// Select color input
//const colorInput = $('colorPicker');
 let colorInput = document.getElementById("colorPicker").value

// Select size input



//var list = document.getElementsByTagName("UL")[0];
//list.getElementsByTagName("LI")[0].innerHTML = "Milk";


// When size is submitted by the user, call makeGrid()
  document.getElementById("pixel_canvas").innerHTML = " ";
  document.getElementsByTagName("input")[0].innerHTML = " ";
 document.getElementsByTagName("input")[2].addEventListener("click", function(event) {
         event.preventDefault();
         let gridHeight = document.getElementById("input_height").value
         let gridWidth = document.getElementById("input_width").value

    function makeGrid() {

      // Your code goes here!
      for(let i = 0; i < gridHeight; i++) {
         let grid = '';
        grid +="<tr>";
        for(let j = 0; j< gridWidth; j++) {
          grid +="<td></td>";
        }
        grid +="</tr>";
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
  	event.target.style.backgroundColor = colorInput;
  },false);
