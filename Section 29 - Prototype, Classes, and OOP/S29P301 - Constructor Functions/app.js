// Create an object Color.  
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// If I want to create methods revolve around the object.  I define the method on the prototype outside of the function that defines the object.  
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Default value of a is 1.0.  This method adds transparency value.  
Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// I created two different objects with Color as a template.  
const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

// Adds transparency to color1 object.  
console.log(color1.rgba(0.2));