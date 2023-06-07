const checkForSpam = function (message) {
    const normalizedMessage = message.toLowerCase();
    // const hasSaleElement = normalizedMessage.includes("sale");
    // const hasSpamElement = normalizedMessage.includes("spam");
    // const forbiddenWordSale = "sale";
    // const forbiddenWordSpam = "spam";

    if (normalizedMessage.includes("sale") || normalizedMessage.includes("spam")) {
        return true;
    }
    
    return false;

    // if (normalizedMessage.includes(forbiddenWordSale)) {
    //     return hasSaleElement;
    // } else if (normalizedMessage.includes(forbiddenWordSpam)) {
    //     return hasSpamElement;
    // }

    // return false;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true