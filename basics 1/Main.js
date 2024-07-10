alert('hello world!');
let name = prompt('Enter your name: ')
if (name) {
	alert('Hello ' + name + '!!!');
	document.getElementById('greeting').textContent = 'Hello ' + name;
}
else {
	alert('Are you nameless??');
}

let info = prompt('How are you?');
document.getElementById('info').textContent = 'I see that you are doing ' + info + '!';

let now = new Date();
let dateStr = now.toLocaleDateString();
let timeStr = now.toLocaleTimeString();
document.getElementById('datetime').innerHTML = 'Date: <b>' + dateStr + '</b><br>';
document.getElementById('datetime').innerHTML += 'Time: <b>' + timeStr + '</b><br>';