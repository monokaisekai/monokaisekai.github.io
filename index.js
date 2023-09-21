document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        const body = document.querySelector('body');
        if (button.value === 'dark') {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            button.innerHTML = 'Light Mode';
            button.value = 'light';
        }
        else {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            button.innerHTML = 'Dark Mode';
            button.value = 'dark';
        }
    });
});
