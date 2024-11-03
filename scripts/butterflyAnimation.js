function getRandomPosition() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const x = Math.floor(Math.random() * vw);
    const y = Math.floor(Math.random() * vh);
    return { x, y };
}

function animateButterfly(butterfly, duration) {
    const { x, y } = getRandomPosition();
    butterfly.style.transition = `transform ${duration}s linear`;
    butterfly.style.transform = `translate(${x}px, ${y}px)`;

    // When the animation ends, choose a new random position and repeat
    setTimeout(() => animateButterfly(butterfly, duration), duration * 1000);
}

// Initialize animation for both butterflies
document.addEventListener("DOMContentLoaded", () => {
    const butterfly1 = document.getElementById("butterfly1");
    const butterfly2 = document.getElementById("butterfly2");

    animateButterfly(butterfly1, 8); // Adjust duration as needed
    animateButterfly(butterfly2, 10);
});
