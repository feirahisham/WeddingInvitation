// Fetch data from weddingInfo.json
fetch('data/weddingInfo.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // Set groom and bride names
        document.querySelector('.groom').textContent = data.groom;
        document.querySelector('.bride').textContent = data.bride;

        // Set date, time, and venue details
        document.querySelector('.date').textContent = data.date;
        document.querySelector('.islamic-date').textContent = data.islamicDate;
        document.querySelector('.time').textContent = data.time;
        document.querySelector('.venue').textContent = data.venue;

        // Set host names and photos
        data.hosts.forEach((host, index) => {
            const hostContainer = document.getElementById(`host-${index + 1}`);
            hostContainer.querySelector('.host-photo').src = host.photo;
            hostContainer.querySelector('.host-name').textContent = host.name;
        });

        // Populate co-hosts list with formatted phone numbers
        const coHostsList = document.querySelector('.co-hosts');
        data["co-hosts"].forEach(coHost => {
            const coHostItem = document.createElement('li');
            coHostItem.textContent = `${coHost.name} (${coHost.contactno})`;
            coHostsList.appendChild(coHostItem);
        });
    })
    .catch(error => console.error('Error loading wedding info:', error));

// Display invitee name from URL or default to "Yang Di Hormati"
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const receiverName = urlParams.get("name");

    // Set the invitee name or default to "Yang Di Hormati"
    const inviteeElement = document.getElementById("receiverName");
    if (inviteeElement) {
        inviteeElement.textContent = receiverName || "Yang Di Hormati";
    } else {
        console.error("Invitee element with ID 'receiverName' not found.");
    }
});

// Toggle background music play/pause
function toggleMusic() {
    const music = document.getElementById("background-music");
    const button = document.getElementById("music-toggle");
    
    if (music.paused) {
        music.play();
        button.textContent = "🔊 Pause Music";
    } else {
        music.pause();
        button.textContent = "🔇 Play Music";
    }
}
