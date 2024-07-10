const header = document.getElementById('header');
const button = document.getElementById('colourButton');

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		
let index = 0;
		
function changeColour() {
	header.style.backgroundColor = colours[index];
	index++;
	if (index >= colours.length) {
		index = 0;
	}
}
button.addEventListener('click', changeColour);

button.addEventListener('mouseover', function() {
	button.style.backgroundColor = 'teal';
	button.style.color = 'orange';
	button.textContent = 'Click Me!!';
});

button.addEventListener('mouseout', function() {
	button.style.backgroundColor = 'transparent';
	button.style.color = 'black';
	button.textContent = 'Change Colour';
});