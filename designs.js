// Select color input
let color = document.getElementById('colorPicker');
// Select size input

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function makeGrid(event) {

  // preventing that site is reloaded on submit
  event.preventDefault();

  // getting canvas height and width
  const row = document.getElementById('input_height').value;
  const col = document.getElementById('input_width').value;
  const canvas = document.getElementById('pixel_canvas');

  // create canvas
  for (let i = 0; i < row; i++){
    canvas.appendChild(document.createElement('tr'));
    for (let o = 0; o < col; o++){
      canvas.lastChild.appendChild(document.createElement('td'));
    }
  }
});
