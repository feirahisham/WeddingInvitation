document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('data/weddingInfo.json');
        if (!response.ok) throw new Error('Failed to load JSON data');
        const data = await response.json();

        // Populate the groom and bride names
        document.getElementById('groomName').textContent = data.groom;
        document.getElementById('brideName').textContent = data.bride;
        
        // Populate the event details
        document.getElementById('eventDate').textContent = data.date;
        document.getElementById('islamicDate').textContent = data.islamicDate;
        document.getElementById('eventTime').textContent = data.time;
        document.getElementById('eventVenue').textContent = data.venue;

        // Populate the hosts section with photos and names
        const hostsSection = document.querySelector('.hosts');
        data.hosts.forEach(host => {
            const hostCard = document.createElement('div');
            hostCard.classList.add('host-card');
            hostCard.innerHTML = `
                <img src="${host.photo}" class="host-photo" alt="${host.name}">
                <p class="host-name">${host.name}</p>
            `;
            hostsSection.appendChild(hostCard);
        });

        // Get the receiver's name from the URL and display it
        const urlParams = new URLSearchParams(window.location.search);
        const receiverName = urlParams.get('name');
        document.getElementById('receiverName').textContent = receiverName || 'Tetamu yang Dihormati';
    } catch (error) {
        console.error('Error loading wedding data:', error);
    }
});
