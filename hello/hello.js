document.addEventListener('DOMContentLoaded', function() {
    // Get the element and body
    const element = document.querySelector("h1");
    const body = document.querySelector("body");
    const form = document.querySelector("form");

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

    form.addEventListener("submit", event => {
        event.preventDefault();
        const input = document.querySelector("input");
        
        if (input.value.length > 0) {
            form.style.display = "none";
            element.innerHTML = `안녕하세요 ${input.value}`;
            greeting.id = "kor"
        }
    });

    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;

        speakButton.addEventListener('click', () => {
            const text = element.textContent;
            const utterance = new SpeechSynthesisUtterance(text);

            synth.speak(utterance);
        });
    } 
    else 
    {
        console.log("Speech Synthesis API is not supported in this browser.");
    }

});