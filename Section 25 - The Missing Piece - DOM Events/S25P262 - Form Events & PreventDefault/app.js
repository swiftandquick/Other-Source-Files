const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats")

form.addEventListener("submit", function (event) {
    console.log(`${input.value} added!`);
    // Prevents default behavior, which is sending user to the destination page.  
    event.preventDefault();
    // If I hit the submit button, I create a <li> element inside the <ul> with text equals to whatever I submitted.  
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    list.append(newLi);
    // Reset input's value to empty string.  
    input.value = "";
});