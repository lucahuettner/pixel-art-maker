// Select color input
let color = document.getElementById('colorPicker');
// Select canvas
  const canvas = document.getElementById('pixel_canvas');
// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function makeGrid(event) {

  // preventing that site is reloaded on submit
  event.preventDefault();

  // getting canvas height and width
  const row = document.getElementById('input_height').value;
  const col = document.getElementById('input_width').value;

  // clear canvas
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }

  // create canvas
  // create rows
  for (let i = 0; i < row; i++){
    canvas.appendChild(document.createElement('tr'));
    //create columns
    for (let o = 0; o < col; o++){
      canvas.lastChild.appendChild(document.createElement('td'));
    }
  }
});
// draw on canvas
canvas.addEventListener('click', function draw(evt){
  evt.target.style.backgroundColor = color.value;
})
