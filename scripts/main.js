// Function to animate the envelope flap and quickly redirect
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const flap = document.querySelector('.envelope-flap');
    const sealButton = document.querySelector('.seal-button');

    envelope.classList.add('open'); // Add 'open' class to trigger flap animation

    // Hide flap and seal button after animation, then redirect
    setTimeout(() => {
        flap.classList.add('hidden');
        sealButton.classList.add('hidden');

        // Redirect immediately after hiding the elements
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name') || 'Tetamu yang Dihormati';
        window.location.href = `invitation.html?name=${encodeURIComponent(name)}`;
    }, 1500); // Matches the animation duration
}
