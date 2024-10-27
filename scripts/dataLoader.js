async function loadWeddingData() {
    const response = await fetch('data/weddingInfo.json');
    const data = await response.json();

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
            <img src="${host.photo}" class="host-photo" />
            <p class="host-name">${host.name}</p>
        `;
        hostsSection.appendChild(hostCard);
    });
}

document.addEventListener('DOMContentLoaded', loadWeddingData);
