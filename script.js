//Мінімум
//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function determineAgeCategory() {
    let age = prompt("Будь ласка, введіть свій вік:");

    // Перевірка, чи введені дані є числом і чи вони не пусті
    if (age === null || age.trim() === "" || isNaN(age)) {
        alert("Введено невірні дані. Будь ласка, введіть числове значення віку.");
        return;
    }

    age = Number(age);

    // Перевірка, чи вік знаходиться в розумних межах
    if (age < 0 || age > 120) {
        alert("Введено нереалістичний вік. Будь ласка, введіть реальний вік.");
        return;
    }

    if (age >= 0 && age <= 11) {
        alert("Ви є дитиною.");
    } else if (age >= 12 && age <= 17) {
        alert("Ви є підлітком.");
    } else if (age >= 18 && age <= 59) {
        alert("Ви є дорослим.");
    } else if (age >= 60) {
        alert("Ви є пенсіонером.");
    } else {
        alert("Введено невірні дані.");
    }
}

determineAgeCategory();
  

//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
function getSpecialCharacter() {
    let num = prompt("Будь ласка, введіть число від 0 до 9:");

    // Перевірка, чи введені дані є числом і чи вони не пусті
    if (num === null || num.trim() === "" || isNaN(num)) {
        alert("Введено невірні дані. Будь ласка, введіть число від 0 до 9.");
        return;
    }

    num = Number(num);

    // Перевірка, чи введене число знаходиться в діапазоні від 0 до 9
    if (num < 0 || num > 9) {
        alert("Введено число поза діапазоном. Будь ласка, введіть число від 0 до 9.");
        return;
    }

    let specialCharacters = {
        0: ")",
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "("
    };

    alert(`Спецсимвол для числа ${num} це '${specialCharacters[num]}'.`);
}

getSpecialCharacter();

//Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function calculateSumInRange() {
    let start = prompt("Введіть початкове число діапазону:");
    let end = prompt("Введіть кінцеве число діапазону:");

    // Перевірка, чи введені дані є числом і чи вони не пусті
    if (start === null || start.trim() === "" || isNaN(start) ||
        end === null || end.trim() === "" || isNaN(end)) {
        alert("Введено невірні дані. Будь ласка, введіть два числа.");
        return;
    }

    start = Number(start);
    end = Number(end);

    // Переконання, що початкове число менше або дорівнює кінцевому числу
    if (start > end) {
        alert("Початкове число має бути менше або дорівнювати кінцевому числу.");
        return;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    alert(`Сума всіх чисел у діапазоні від ${start} до ${end} дорівнює ${sum}.`);
}

calculateSumInRange();


//Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function findGCD() {
    let num1 = prompt("Введіть перше число:");
    let num2 = prompt("Введіть друге число:");

    // Перевірка, чи введені дані є числом і чи вони не пусті
    if (num1 === null || num1.trim() === "" || isNaN(num1) ||
        num2 === null || num2.trim() === "" || isNaN(num2)) {
        alert("Введено невірні дані. Будь ласка, введіть два числа.");
        return;
    }

    num1 = Math.abs(Number(num1));
    num2 = Math.abs(Number(num2));

    // Функція для знаходження НСД
    function gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    let result = gcd(num1, num2);
    alert(`Найбільший спільний дільник чисел ${num1} і ${num2} дорівнює ${result}.`);
}

findGCD();


//Запитай у користувача число і виведи всі дільники цього числа.
function findDivisors() {
    let num = prompt("Введіть число:");

    // Перевірка, чи введені дані є числом і чи вони не пусті
    if (num === null || num.trim() === "" || isNaN(num)) {
        alert("Введено невірні дані. Будь ласка, введіть число.");
        return;
    }

    num = Math.abs(Number(num));
    let divisors = [];

    // Знаходження всіх дільників
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }

    alert(`Дільники числа ${num}: ${divisors.join(", ")}`);
}

findDivisors();


//Норма
//Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
function checkPalindrome() {
    let num = prompt("Введіть п'ятирозрядне число:");

    // Перевірка, чи введені дані є числом, чи вони п'ятирозрядні і чи вони не пусті
    if (num === null || num.trim() === "" || isNaN(num) || num.length !== 5) {
        alert("Введено невірні дані. Будь ласка, введіть п'ятирозрядне число.");
        return;
    }

    // Перевірка, чи є число паліндромом
    let reversedNum = num.split('').reverse().join('');
    if (num === reversedNum) {
        alert(`Число ${num} є паліндромом.`);
    } else {
        alert(`Число ${num} не є паліндромом.`);
    }
}

checkPalindrome();

//ЗЗапитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//від 200 до 300 - знижка буде 3%; 
//від 300 до 500 - 5%;
//від 500 і вище - 7%.
function calculateDiscount() {
    let purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));

    // Перевірка, чи введені дані є числом і чи вони більше 0
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
        alert("Введено невірні дані. Будь ласка, введіть правильну суму покупки.");
        return;
    }

    let discount = 0;

    if (purchaseAmount >= 200 && purchaseAmount < 300) {
        discount = 3;
    } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
        discount = 5;
    } else if (purchaseAmount >= 500) {
        discount = 7;
    }

    let discountedAmount = purchaseAmount - (purchaseAmount * discount / 100);
    
    alert(`Сума до оплати зі знижкою: ${discountedAmount.toFixed(2)} (знижка ${discount}%)`);
}

calculateDiscount();

//Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
function getUserNumbersStats() {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < 10; i++) {
        let userInput = parseFloat(prompt("Введіть число:"));

        if (isNaN(userInput)) {
            alert("Введено невірні дані. Будь ласка, введіть правильне число.");
            i--; // Повторити ітерацію у випадку неправильного вводу
            continue;
        }

        if (userInput > 0) {
            positiveCount++;
        } else if (userInput < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }

        if (userInput % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    alert(`Статистика введених чисел:
    Додатні: ${positiveCount}
    Від'ємні: ${negativeCount}
    Нулі: ${zeroCount}
    Парні: ${evenCount}
    Непарні: ${oddCount}`);
}

getUserNumbersStats();

//Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function showWeekDays() {
    const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    let currentDayIndex = 0;

    while (true) {
        let userResponse = confirm(`${daysOfWeek[currentDayIndex]}. Хочеш побачити наступний день?`);
        if (!userResponse) {
            break;
        }
        currentDayIndex = (currentDayIndex + 1) % 7;
    }
}

showWeekDays();

//Максимум
//Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
function guessNumber() {
    let min = 0;
    let max = 100;
    let guess;
    let userResponse;

    alert("Загадайте число від 0 до 100");

    while (min <= max) {
        guess = Math.floor((min + max) / 2);
        userResponse = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? Введіть '>', '<' або '==' відповідно.`);

        if (userResponse === '==') {
            alert(`Я вгадав! Ваше число: ${guess}`);
            break;
        } else if (userResponse === '>') {
            min = guess + 1;
        } else if (userResponse === '<') {
            max = guess - 1;
        } else {
            alert("Будь ласка, введіть тільки '>', '<' або '=='.");
        }
    }
}

guessNumber();


//Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
var day = parseInt(prompt("Введіть день:"));
var month = parseInt(prompt("Введіть місяць:"));
var year = parseInt(prompt("Введіть рік:"));

// Перевіряємо чи дата коректна
if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || month < 1 || month > 12) {
    console.log("Введено некоректну дату.");
} else {
    // Визначаємо кількість днів у місяці
    var daysInMonth = new Date(year, month, 0).getDate();

    // Перевіряємо чи введений день не більше кількості днів у місяці
    if (day > daysInMonth) {
        console.log("Введено некоректний день для цього місяця.");
    } else {
        // Визначаємо наступну дату
        var nextDay = day + 1;
        var nextMonth = month;
        var nextYear = year;

        // Перевіряємо чи не вийшли за межі місяця та року
        if (nextDay > daysInMonth) {
            nextDay = 1;
            nextMonth++;
            if (nextMonth > 12) {
                nextMonth = 1;
                nextYear++;
            }
        }

        // Виводимо наступну дату
        console.log("Наступна дата: " + nextDay + "." + nextMonth + "." + nextYear);
    }
}