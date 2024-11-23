

// Stopping the steam 
setTimeout(() => {
    document.querySelectorAll('.steam').forEach(e => {
        e.style.animation = 'paused';
        e.style.backgroundColor = 'transparent';
    });
}, 8000);

// Changing html
let text = ['Are you enjoying?','Has the tea gone cold??🥲, Lemme turn on the gas....'];
let box = document.getElementById('box1');
let delay = 10000;
text.forEach((message, index) => {
    setTimeout(() => {
        box.innerHTML = message;
        box.style.color = 'black';
    }, delay*index);
});

// Code for click event
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    document.querySelectorAll('.flame, .steam').forEach(e => {
        e.style.animationPlayState = 'running';
        // starts steam animation
        if (e.classList.contains('steam')) {
            e.style.backgroundColor = 'white';
            e.style.animation = 'vap0 10s cubic-bezier(0.78, 0.12, 0.73, 0.42) 0s infinite normal' 
        }
        // Starts flame animation 
        else if (e.classList.contains('flame')) {
            e.style.backgroundColor = 'red'; 
        }
    });
    setTimeout(() => {
        document.getElementById('box1').innerHTML = `I guess now it's perfect`;
    }, 2000);
})

    