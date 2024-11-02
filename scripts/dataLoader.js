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
