//Min
//Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
let name = 'Olha';
let surname = 'Zhadan';
let nameAndSurname = 'OlhaZhadan';
let user = 'Olha Zhadan';

//Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
/*
let if;
let else; 
let function; 
let for; 
let while;
let class;
let a bc;
let #abc;
let 2abc;
var NaN;
*/

//Вкажи всі можливі способи коментування коду;
/*
*/

//Які стилі написання імен змінних ти знаєш?
let test;
let TEST;
let $test;
let _123test;
let test_value123$;
let testValue;

//Norma
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
let result = prompt('What is your name?');
alert("Hi" + " " + result);
// // Refresh the page
// location.reload();

//Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;
const YEAR = 2024;
let age = prompt('How old are you?');
let bornYear = YEAR - age;
alert("So you was born in" + " " + bornYear + " " + "year");
// // Refresh the page
// location.reload();

//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
let lenthOfSquareSide = prompt('What is the length of the square side you want to calculate?');
let square = lenthOfSquareSide * 4;
alert("So square is" + " " + square);
// // Refresh the page
// location.reload();

//Max
//Запитай у користувача радіус кола і виведи площу такої окружності.
let radius = prompt('What is the radius?');
const PI = 3.14;
let circle = 2 * PI * radius; 
alert("So circle is" + " " + circle);
// // Refresh the page
// location.reload();

//Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
let distance = prompt('What is the distance for your trip?');
let time = prompt('What amount of time you will be ready to spend for your trip?');
let speed = distance / time;
alert("So you need to use" + " " + speed + " " + "speed to  achieve your goal");
// // Refresh the page
// location.reload();


//Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
let euro = prompt('In euro?');
const DOLLAR = 1.07;
let calcDollar = euro * DOLLAR;
alert("It will be" + " " + calcDollar + " " + "dollars");
// // Refresh the page
// location.reload();
