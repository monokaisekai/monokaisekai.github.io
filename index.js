document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        const urlToOpen = 'https://monokaisekai.github.io/hello/hello.html';
        
        // Open the URL in a new tab
        window.open(urlToOpen, '_blank');
    });
});
