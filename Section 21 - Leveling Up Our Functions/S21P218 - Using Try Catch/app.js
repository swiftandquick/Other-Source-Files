// try block catches an error.  
try {
    hello.toUpperCase();
}
// catch block executes if try block has an error.  
catch {
    console.log("Error!");
}


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e);
        console.log("Please pass a string next time");
    }
}

yell("hello"); // try block executes because it is a string.  
yell(123); // catch block executes because there's an error.  
yell(true); // catch block executes because there's an error.  