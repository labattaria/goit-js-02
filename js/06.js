// let input;
// const numbers = [];
// let total = 0;

// for (let i = 0; i < i + 1; i += 1) {
//     input = prompt("Введите число:");

//     numbers.push(Number(input));

//     if (input === null) {
//         break;
//     } else if (Number.isNaN(Number(input))) {
//         alert('Было введено не число, попробуйте еще раз');
//         continue;
//     }
// }

// for (const number of numbers) {
//     total += number;
// }

// console.log(`Общая сумма чисел равна ${total}`);


let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введите число:");

    if (input === null) {
        break;
    } else if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(Number(input));
    
}

for (const number of numbers) {
    total += number;
}

console.log(`Общая сумма чисел равна ${total}`);