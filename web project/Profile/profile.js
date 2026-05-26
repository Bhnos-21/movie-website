const favCountEl = document.getElementById('favCount');
const historyCountEl = document.getElementById('historyCount');
const historyListEl = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const resetDataBtn = document.getElementById('resetDataBtn');
const joinDateEl = document.getElementById('joinDate');

function initProfile() {
    const today = new Date();
    joinDateEl.textContent = today.getFullYear() - 1;

    const session = JSON.parse(localStorage.getItem('cinex_session'));
    if (session) {
        document.getElementById('userName').textContent = session.name;
        document.getElementById('userEmail').textContent = session.email;
    } else {
        document.getElementById('userName').textContent = "Guest User";
        document.getElementById('userEmail').textContent = "Please log in";
    }

    const favorites = JSON.parse(localStorage.getItem('cinex_favorites')) || [];
    favCountEl.textContent = favorites.length;

    const history = JSON.parse(localStorage.getItem('cinex_history')) || [];
    historyCountEl.textContent = history.length;
    renderHistory(history);

    if(clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            if(confirm('Clear your watch history?')) {
                localStorage.removeItem('cinex_history');
                location.reload();
            }
        });
    }

    if(resetDataBtn) {
        resetDataBtn.addEventListener('click', () => {
            if(confirm('Are you sure? This will delete all favorites and history.')) {
                localStorage.clear();
                location.reload();
            }
        });
    }
}

function renderHistory(historyIds) {
    historyListEl.innerHTML = '';

    if (historyIds.length === 0) {
        historyListEl.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:20px;">No recent activity yet. Go explore some movies!</p>';
        return;
    }

    const reversedHistory = [...historyIds].reverse();

    reversedHistory.forEach(id => {
        const movie = moviesDB.find(m => m.id === id);
        if (!movie) return;

        const item = document.createElement('div');
        item.className = 'history-item';
        item.onclick = () => { window.location.href = `../Details/details.html?id=${movie.id}`; };

        item.innerHTML = `
            <img src="${movie.poster}" class="history-poster" alt="${movie.title}" style="object-fit: cover;">
            <div class="history-info">
                <div class="history-title">${movie.title}</div>
                <div class="history-meta">${movie.year} • ${movie.genre}</div>
            </div>
            <div class="history-date">Just now</div>
        `;
        historyListEl.appendChild(item);
    });
}

initProfile();