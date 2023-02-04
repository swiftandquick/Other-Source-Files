// Add a yell() method for the String object.  
String.prototype.yell = function () {
    // Transform the string to upper case.  
    return `${this.toUpperCase()}!!!`;
}

// Call the yell method, "hello" is the String object.  
console.log("hello".yell());


// pop() is suppose to replace the last element from the array, but here, I can change its function.  
Array.prototype.pop = function () {
    return "Sorry, I want that element, I will never pop it off!";
}

// 5 is not removed, instead, the new pop() method returns a string.  
console.log([3, 4, 5].pop());
