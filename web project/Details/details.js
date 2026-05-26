document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movie-detail-container');
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (!movieId) {
        container.innerHTML = '<h2 style="text-align:center">Movie not found.</h2><p style="text-align:center"><a href="../Explore/explore.html" style="color:#ffd700">Go back to Explore</a></p>';
        return;
    }

    const movie = moviesDB.find(m => m.id === movieId);

    if (!movie) {
        container.innerHTML = `<div style="text-align:center; margin-top:50px;"><h2>404 - Movie Not Found</h2><br><a href="../Explore/explore.html" class="btn-primary">Back to Explore</a></div>`;
        return;
    }

    trackHistory(movieId);

    container.innerHTML = `
        <div class="details-hero">
            <div class="details-poster">
                <img src="${movie.poster}" alt="${movie.title} Poster">
            </div>
            
            <div class="details-content">
                <h1 class="details-title">${movie.title}</h1>
                
                <div class="details-meta">
                    <span class="rating-badge"><i class="fa-solid fa-star"></i> ${movie.rating}/10</span>
                    <span>${movie.year}</span>
                    <span class="genre-badge">${movie.genre}</span>
                    <span><i class="fa-regular fa-clock"></i> 2h 15m</span>
                </div>

                <p class="details-desc">
                    ${movie.desc}
                </p>

                <div style="margin-bottom: 30px; color: #aaa; font-size: 0.9rem;">
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Cast:</strong> ${movie.cast}</p>
                </div>

                <div class="action-buttons">
                    <a href="#" class="btn-primary">
                        <i class="fa-solid fa-play"></i> Watch Trailer
                    </a>
                    
                    <button id="favBtn" class="btn-secondary" style="border:none; cursor:pointer; display:flex; align-items:center; gap:8px;">
                        <i class="fa-regular fa-heart"></i> 
                        <span>Add to Favourites</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    initFavoriteButton(movieId);
});

function trackHistory(movieId) {
    let history = JSON.parse(localStorage.getItem('cinex_history')) || [];
    
    history = history.filter(id => id !== movieId);
    history.push(movieId);
    
    if (history.length > 20) {
        history = history.slice(history.length - 20);
    }
    
    localStorage.setItem('cinex_history', JSON.stringify(history));
}

function initFavoriteButton(movieId) {
    const btn = document.getElementById('favBtn');
    if (!btn) return;

    const icon = btn.querySelector('i');
    const text = btn.querySelector('span');
    
    let favorites = JSON.parse(localStorage.getItem('cinex_favorites')) || [];
    const isFav = favorites.includes(movieId);

    updateButtonVisuals(isFav);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        favorites = JSON.parse(localStorage.getItem('cinex_favorites')) || [];
        const index = favorites.indexOf(movieId);

        if (index === -1) {
            favorites.push(movieId);
        } else {
            favorites.splice(index, 1);
        }

        localStorage.setItem('cinex_favorites', JSON.stringify(favorites));
        updateButtonVisuals(favorites.includes(movieId));
    });

    function updateButtonVisuals(isFavorite) {
        if (isFavorite) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = '#e50914';
            text.textContent = "Remove from Favourites";
            btn.style.borderColor = 'rgba(229, 9, 20, 0.3)';
            btn.style.color = '#e50914';
            btn.style.background = 'rgba(229, 9, 20, 0.1)';
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = '';
            text.textContent = "Add to Favourites";
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.style.background = '';
        }
    }
}