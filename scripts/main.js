// Function to redirect to the invitation page with the receiver's name parameter
function redirectToInvitation() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || 'Tetamu yang Dihormati';

    // Redirect to invitation.html with the name parameter in the URL
    window.location.href = `invitation.html?name=${encodeURIComponent(name)}`;
}
