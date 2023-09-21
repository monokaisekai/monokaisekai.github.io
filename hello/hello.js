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
            element.innerHTML = `안녕 ${input.value}`;
            // use google tts
            const textToSpeak = `안녕 ${input.value}`;
            const languageCode = 'ko'; // Language code for Korean
            const googleTTSUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(textToSpeak)}&tl=${languageCode}`;

            const audioElement = new Audio(googleTTSUrl);
            audioElement.play();


            // if ('speechSynthesis' in window) {
            //     const synth = window.speechSynthesis;
        
            //     // Create a SpeechSynthesisUtterance for the input value
            //     const inputUtterance = new SpeechSynthesisUtterance(`an yong ${input.value}`);
            //     const koreanVoice = synth.getVoices().find(voice => voice.lang === 'ko-KR');
            //     inputUtterance.rate = 0.5;
            //     synth.speak(inputUtterance)
            // } 
            // else 
            // {
            //     console.log("Speech Synthesis API is not supported in this browser.");
            // }
        }
    });

});