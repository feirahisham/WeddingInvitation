// Redirect to the invitation page with the name parameter in the URL
function redirectToInvitation() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name') || 'Tetamu yang Dihormati';

    // Redirect to the invitation page with the name parameter
    window.location.href = `invitation.html?name=${encodeURIComponent(name)}`;
}
