let myname = 'Kyan';
const myage = 18;
let myphone = 12345678;

let myarr = [1, 2, 3, 4, 5];
let ishuman = true; 

console.log(myname);

let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7;
let d = 123 % 45;

console.log(a, b, c, d);

let e = Math.random();
let f = Math.round(123.45678);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;

console.log('cos(pi) = ' + g);


let firstname = 'Andrew';
let lastname = 'Tay';
let fullname = firstname + ' ' + lastname;
let namelength = fullname.length;

console.log(fullname + ', length: ' + namelength);

let language = 'Javascript';
console.log(language[0]);
console.log(language.substring(2, 5));
console.log(language.toUpperCase());
console.log(language.replace('Java', 'Type'));
console.log(language.includes('Java'));

console.log(`But I also like ${language.toLowerCase()}!`)





let age = parseInt(prompt('Please enter your age: '));

if (age <= 12) {
    console.log('Hello kid.');
}
else if (age <= 18) {
    console.log('Hello teen.');
}
else {
    console.log('Hello adult.');
}

let fruits = ['apple', 'mango', 'pineapple', 'banana', 'coconut'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
console.log('Happy new year!');

let numbers = [123, 456, 789];
let schools = ['RI', 'ASR', 'EJC', 'ACJC'];
let mixed = [1.23, 'Happy', [4, 5, 6]];

console.log(numbers[0]);
console.log(schools.length);

schools.push('TMJC');
schools.push('HCI');

console.log(schools)

schools.pop();
console.log(schools);

for (let i = 0; i < schools.length; i++) {
    console.log(schools[i]);
}



let person = {
    firstname: 'Maadhesh',
    lastname: 'Vetrimani',
    age: 17,
    isstudent: true
};

person['age'] = 18
person['isstudent'] = false;
console.log(person.age);
console.log(person['firstname'], person['lastname']);

function cube(x) {
    return x ** 3;
}

let magnitude = (x, y, z) => Math.sqrt(x ** 2 + y ** 2 + z ** 2)

console.log(magnitude(3, 4, 5))
