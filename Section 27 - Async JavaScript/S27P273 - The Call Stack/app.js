const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

// Checks if the sum of two sides' squared is equal to the longest side squared, return a Boolean.  
const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log(isRightTriangle(3, 4, 5));