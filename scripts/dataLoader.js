// Load the invitation data and display the invitee's name
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/weddingInfo.json');
        if (!response.ok) throw new Error('Failed to load JSON data');
        const data = await response.json();

        // Populate the invitation details
        document.getElementById('groomName').textContent = data.groom;
        document.getElementById('brideName').textContent = data.bride;
        document.getElementById('eventDate').textContent = data.date;
        document.getElementById('islamicDate').textContent = data.islamicDate;
        document.getElementById('eventTime').textContent = data.time;
        document.getElementById('eventVenue').textContent = data.venue;

        const hostsSection = document.getElementById('hostsSection');
        data.hosts.forEach(host => {
            const hostCard = document.createElement('div');
            hostCard.classList.add('host-card');
            hostCard.innerHTML = `
                <img src="${host.photo}" class="host-photo" alt="${host.name}" />
                <p class="host-name">${host.name}</p>
            `;
            hostsSection.appendChild(hostCard);
        });

        // Get the receiver's name from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const receiverName = urlParams.get('name');
        document.getElementById('receiverName').textContent = receiverName || 'Tetamu yang Dihormati';
    } catch (error) {
        console.error('Error loading invitation data:', error);
    }
});
