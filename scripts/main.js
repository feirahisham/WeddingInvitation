document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope");
    const sealButton = document.querySelector(".seal-button");

    if (envelope && sealButton) {
        window.openEnvelope = function() {
            envelope.classList.add("open");
            sealButton.classList.add("fade-out");

            // Get the 'name' parameter from the current URL
            const urlParams = new URLSearchParams(window.location.search);
            const receiverName = urlParams.get("name");

            // Build the redirection URL, including the 'name' parameter if it exists
            const redirectUrl = receiverName ? `invitation.html?name=${encodeURIComponent(receiverName)}` : 'invitation.html';

            // Delay to allow the animation to play before redirecting
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 1000);
        };
    } else {
        console.error("Envelope or seal button not found.");
    }
});
