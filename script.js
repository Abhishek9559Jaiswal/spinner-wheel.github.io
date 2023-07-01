let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.round(Math.random() * 1000);

let clickCount = 0;

// Add click event listener to the button
btn.addEventListener("click", handleClick);

// Function to handle button click
function handleClick() {
    clickCount++;

    if (clickCount === 1) {

        container.style.transform = "rotate(580deg)";
        number += Math.round(Math.random() * 1000);

    } else if (clickCount > 1) {

        container.style.transform = "rotate(" + number + "deg)";
        number += Math.round(Math.random() * 1000);

    }
}


