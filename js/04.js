const formatString = function (string) {
    const stringSize = string.length;
    const optimizedString = string.slice(0, 40) + "...";

    if (stringSize <= 40) {
        return string;
    } else {
        return optimizedString;
    }
}

// const formatString = function (string) {

//     if (string.length <= 40) {
//         return string;
//     } else {
//         return (string.slice(0, 40) + "...");
//     }
// }

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка