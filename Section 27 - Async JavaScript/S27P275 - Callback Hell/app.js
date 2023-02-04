const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        // Checks if there's a doNext function, if there is, invoke the doNext() function.  
        doNext && doNext();
    }, delay);
}

// Instead of writing repetitive codes 5 times, I use nested functions to invoke delayedColorChange repetitively.  
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000);
            });
        });
    });
});