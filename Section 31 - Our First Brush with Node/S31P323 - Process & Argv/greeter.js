// First two elements are not arguments, so I retrieve elements from index 2 and onward.  Store arguments in array args.  
const args = process.argv.slice(2);

// Print out each argument.  
for (let arg of args) {
    console.log(`Hi there, ${arg}`);
}
