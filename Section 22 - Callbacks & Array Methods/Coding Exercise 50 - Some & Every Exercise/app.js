function allEvens(arr) {
    return arr.every(num => num % 2 === 0);
}

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
