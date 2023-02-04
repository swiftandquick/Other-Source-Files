// This function converts rgb color to hexadecimal color, and return it as a string.  
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// This function return color in rgb format.  
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

/* This factory function creates a color object, set its attribute equal to the arguments. 
The color object initially has no attributes, but I add attributes in later.  
Create another key called rgb, which is a function that returns the color in rgb format.  
Create another key called hex, which is a function that returns the color in hexadecimal format.  
The key word this refers to the color object that we created inside the makeColor() function.  
*/
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
console.log(firstColor.hex());