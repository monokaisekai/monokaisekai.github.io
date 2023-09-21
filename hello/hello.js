document.addEventListener('DOMContentLoaded', function() {
    // Get the element and body
    const element = document.querySelector("h1");
    const body = document.querySelector("body");

    // Add a mouseover event listener
    element.addEventListener("mouseover", function() {
        // Change the text color on hover
        element.style.color = "black";
        body.style.backgroundColor = "white";
    });

    element.addEventListener("mouseout", function() {
        // Change the text color on hover
        element.style.color = "white";
        body.style.backgroundColor = "black";
    });
});