// Function to animate the envelope and then redirect to the invitation page
function redirectToInvitation() {
    const envelope = document.getElementById('envelope');
    envelope.classList.add('open'); // Add the 'open' class to trigger the animation

    // Add a delay to allow the animation to complete before redirecting
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('name') || 'Tetamu yang Dihormati';

        // Redirect to the invitation page with the name parameter
        window.location.href = `invitation.html?name=${encodeURIComponent(name)}`;
    }, 1500); // Match the delay to the animation duration
}
