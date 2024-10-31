let lights = document.querySelectorAll(".light");
let currentLight = 0;
let direction = 1;
let interval;

function animateLights() {

    lights.forEach(light => {
        light.style.backgroundColor = 'white';
        light.style.opacity = 0.3;
    });


    lights[currentLight].style.backgroundColor = 'red';
    lights[currentLight].style.opacity = 1;


    if (currentLight - 1 >= 0) { // Left trail
        lights[currentLight - 1].style.backgroundColor = 'lightred';
        lights[currentLight - 1].style.opacity = 0.6;
    }
    if (currentLight + 1 < lights.length) { // Right trail
        lights[currentLight + 1].style.backgroundColor = 'darkred';
        lights[currentLight + 1].style.opacity = 0.6;
    }

    // Update the position for the next frame
    currentLight += direction;
    if (currentLight === lights.length - 1 || currentLight === 0) {
        direction *= -1; // Change direction
    }
}

function startAnimation() {
    if (!interval) {
        interval = setInterval(animateLights, 200);
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;

}
