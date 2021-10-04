const addNums = (num1, num2) => {
    return num1 + num2;
};

const minusNums = (num1, num2) => {
    return num1 - num2;
};

const multiplyNums = (num1, num2) => {
    return num1 * num2;
};

const biggerNum = (num1, num2) => {
    return Math.max(num1, num2);
};

const smallerNum = (num1, num2) => {
    return Math.min(num1, num2);
};

const findAverage = (num1, num2) => {
    return Math.round((num1 + num2) / 2);
};

const doMaths = (func, val1, val2) => {
    let result = func(val1, val2);
    console.log(result);
};

doMaths(addNums, 2, 4);                 // => 6
doMaths(addNums, 2, 4, 10);             // => 6  ** ignores any additional numbers

doMaths(minusNums, 2, 4);               // => -2
doMaths(multiplyNums, 2, 4);            // => 8
doMaths(biggerNum, 2, 4);               // => 4
doMaths(biggerNum, 2, 4, 10);           // => 4  ** also ignores any additional numbers

doMaths(smallerNum, 2, 4);              // => 2
doMaths(findAverage, 2, 4);             // => 3

