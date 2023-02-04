// Create an object called Color with class.  
class Color {
    // Constructor will be invoked after the object is created.  
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
    }
    // Create a method for the object.  
    innerRgb() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        // Call the the current's object innerRgb method to get the returned string value.  
        return `rgb(${this.innerRgb()})`;
    }
    // a's default value is 1.0.  
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRgb()}, ${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");