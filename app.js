let currentLang = 'fi';

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(section).classList.add('active');
    event.target.classList.add('active');
}

function toggleLanguage() {
    currentLang = currentLang === 'fi' ? 'en' : 'fi';
    document.getElementById('langBtn').textContent = currentLang === 'fi' ? 'EN' : 'FI';
    updateContent();
}

function updateContent() {
    const t = translations[currentLang];
    
    // Update text content
    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'contactHoursText') {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update events
    updateEvents();
    
    // Update bands
    updateBands();
    
    // Update join section
    updateJoinSection();
}

function updateEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = '';
    eventsData[currentLang].forEach(event => {
        eventsGrid.innerHTML += `
            <div class="card">
                <span class="card-badge">${event.type}</span>
                <h3>${event.title}</h3>
                <div class="info-item"><span>📅</span><span>${event.date}</span></div>
                <div class="info-item"><span>🕐</span><span>${event.time}</span></div>
                <div class="info-item"><span>📍</span><div><strong>${event.location}</strong><br>${event.address}</div></div>
                <p style="margin-top: 15px; color: rgba(255,255,255,0.9);">${event.description}</p>
            </div>
        `;
    });
}

function updateBands() {
    const bandsGrid = document.getElementById('bandsGrid');
    bandsGrid.innerHTML = '';
    bandsData[currentLang].forEach(band => {
        bandsGrid.innerHTML += `
            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div>
                        <h3>${band.name}</h3>
                        <span class="card-badge">${band.genre}</span>
                    </div>
                    <span style="font-size: 32px;">👥</span>
                </div>
                <div style="border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px; margin-top: 20px;">
                    <div class="info-item">
                        <strong>${translations[currentLang].bandsSeeking}</strong> ${band.seeking}
                    </div>
                    <div class="info-item">
                        <strong>${translations[currentLang].bandsContact}</strong> ${band.contact}
                    </div>
                </div>
            </div>
        `;
    });
}

function updateJoinSection() {
    const joinGrid = document.getElementById('joinGrid');
    joinGrid.innerHTML = '';
    joinData[currentLang].forEach(item => {
        const pointsList = item.points.map(p => `<li>${p}</li>`).join('');
        joinGrid.innerHTML += `
            <div class="card">
                <div style="font-size: 48px; margin-bottom: 20px;">${item.icon}</div>
                <h3>${item.title}</h3>
                <p style="margin: 15px 0; color: rgba(255,255,255,0.9);">${item.description}</p>
                <ul>${pointsList}</ul>
            </div>
        `;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
});