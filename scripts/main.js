// Function to animate the envelope and then redirect to the invitation page
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open'); // Add 'open' class to trigger flap animation

    // Wait for the animation to complete before redirecting
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name') || 'Tetamu yang Dihormati';

        // Redirect to the invitation page with the name parameter
        window.location.href = `invitation.html?name=${encodeURIComponent(name)}`;
    }, 1800); // Delay matches the animation duration
}
