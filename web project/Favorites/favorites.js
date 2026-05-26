const favGrid = document.getElementById('favGrid');
const emptyState = document.getElementById('emptyState');

function renderFavorites() {
    const storedIds = JSON.parse(localStorage.getItem('cinex_favorites')) || [];
    
    favGrid.innerHTML = '';

    if (storedIds.length === 0) {
        emptyState.style.display = 'block';
        return;
    } else {
        emptyState.style.display = 'none';
    }

    const favoriteMovies = moviesDB.filter(movie => storedIds.includes(movie.id));

    favoriteMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.onclick = () => { window.location.href = `../Details/details.html?id=${movie.id}`; };

        card.innerHTML = `
            <div class="poster-placeholder">
                <img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="card-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span>
                </div>
                <span class="genre-tag">${movie.genre}</span>
            </div>
        `;
        favGrid.appendChild(card);
    });
}

renderFavorites();