// Show the invitation when the button is clicked and simulate envelope opening
function openEnvelope() {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.container').classList.remove('hidden');
    document.getElementById('bg-music').play();
}

// Background music control
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const controlButton = document.getElementById('music-control');

    if (music.paused) {
        music.play();
        controlButton.textContent = "⏸ Music";
    } else {
        music.pause();
        controlButton.textContent = "▶ Music";
    }
}

// Retrieve and display the invitee's name from the URL
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const receiverName = urlParams.get("name");

    if (receiverName) {
        document.getElementById("receiverName").textContent = receiverName;
    } else {
        document.getElementById("receiverName").textContent = "Tetamu yang Dihormati";
    }
});
