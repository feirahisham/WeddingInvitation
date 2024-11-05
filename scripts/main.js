document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector(".envelope");
    const sealButton = document.querySelector(".seal-button");

    // Define the openEnvelope function
    function openEnvelope() {
        document.removeEventListener("click", openEnvelope); // Remove event listener after opening

        // // Get the 'name' parameter from the current URL
        // const urlParams = new URLSearchParams(window.location.search);
        // const receiverName = urlParams.get("name");

        // // Construct the redirect URL with the 'name' parameter if it exists
        // const redirectUrl = receiverName 
        //     ? `invitation.html?name=${encodeURIComponent(receiverName)}` 
        //     : 'invitation.html';

        // Get the 'id' parameter from the current URL
        const urlParams = new URLSearchParams(window.location.search);
        const inviteeId = urlParams.get("id");

        // Construct the redirect URL with the 'id' parameter if it exists
        const redirectUrl = inviteeId 
            ? `invitation.html?id=${encodeURIComponent(inviteeId)}` 
            : 'invitation.html';

        // Trigger animation and redirect after delay
        envelope.classList.add("open"); // Add class to trigger animation
        sealButton.classList.add("fade-out"); // Fade out seal button

        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 1000); // Adjust delay to match animation timing
    }

    // Ensure envelope and seal button exist, then add event listener
    if (envelope && sealButton) {
        document.addEventListener("click", openEnvelope); // Add click listener to whole page
    } else {
        console.error("Envelope or seal button not found.");
    }
});
