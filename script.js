const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex3 = 'The salad costs $9.99';
const ex4 = 'Contact customer support on 0800 300 500';
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
function exercise1() {
    const threeLetterWords = ex1.match(/(^|\s)[a-zA-Z]{3}($|\s)/g);

    return threeLetterWords;
}

console.log(exercise1());

// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.
function exercise2() {
    const removedNumsStr = ex2.replace(/[0-9]/g, "");

    return removedNumsStr;
}

console.log(exercise2());

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.
function exercise3() {
    const monetaryVal = ex3.match(/\$\d{1,3}\.\d\d/)[0];

    return monetaryVal;
}

console.log(exercise3());

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.
function exercise4() {
    const teleNum = ex4.match(/(\d{3,4}\s?){3}/g);

    return teleNum;
}

console.log(exercise4());

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.
function exercise5() {
    const email = ex5.match(/\S+@\S+\.\S+/)[0];

    return email;
}

console.log(exercise5());