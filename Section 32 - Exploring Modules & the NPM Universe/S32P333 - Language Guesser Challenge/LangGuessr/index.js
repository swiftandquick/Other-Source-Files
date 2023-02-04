// Import necessary directories, make sure "type": "module" is in package.json first.  
import { franc, francAll } from 'franc';
import langs from 'langs';
import colors from 'colors';

// Get index 2, or first argument.  
const input = process.argv[2];

// Returns a 3-letter language code based on input.  .  
const langCode = franc(input);

// If no language can be detected, langCode will be 'und'.  
if (langCode === 'und') {
    console.log("Invalid language.".rainbow);
}
else {
    // 3 represents the 3-character code for the language.  
    // where() method creates a language object.  
    const language = langs.where("3", langCode);
    // Print out the language object based on langCode in 3 letters and ISO version ("3"). 
    console.log(language);
    // Print out the language name.  
    console.log(`Our best guess is ${language.name}!`.rainbow);
}