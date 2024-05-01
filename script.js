//Мінімум
//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let a = 0.1;
let b = 0.2;
let sum = a + b;
alert(sum.toFixed(1));

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let string = "1";
let number = 2;
let stringAndNumber = parseInt(string) + number;
alert(stringAndNumber);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let Gb = prompt('Amount of GB?');
const MB = 820;
let files = Gb * 1024 / 820;
alert(Math.floor(files));


//Норма
//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let moneyAmount = prompt('How many money do you have?');
let chocolatePrice = prompt('Wht is the price of the chocolate?');
let chocolateAmount = moneyAmount / chocolatePrice;
alert(Math.round(chocolateAmount));

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let userNumber = prompt("What is your number?");
alert(userNumber.split("").reverse().join(""));


//Максимум
//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let amountIntoBankAccount = prompt('What amount of money you ready to put in your Bank Account??');
const DEPOSIT = 5;
let yearResult = ((amountIntoBankAccount * DEPOSIT) / 100) * (365 * 2 / 365);
alert('You will get' + ' '+ yearResult);

//Що повернуть вирази:
// 2 && 0 && 3
//return: 0;

// 2 || 0 || 3
//return: 2;

//2 && 0 || 3
//return: 3;