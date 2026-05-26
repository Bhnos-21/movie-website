const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const genreBtns = document.querySelectorAll('.genre-btn');

let currentGenre = 'all';
let searchQuery = '';

function renderMovies() {
    movieGrid.innerHTML = ''; 
    const filteredMovies = moviesDB.filter(movie => {
        const matchesGenre = currentGenre === 'all' || movie.genre === currentGenre;
        const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesGenre && matchesSearch;
    });

    if (filteredMovies.length === 0) {
        movieGrid.innerHTML = `<div class="no-results"><i class="fa-solid fa-film" style="font-size: 2rem; margin-bottom: 15px; opacity: 0.5;"></i><br>No movies found.</div>`;
        return;
    }

    filteredMovies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => { window.location.href = `../Details/details.html?id=${movie.id}`; };
        card.innerHTML = `
            <div class="poster-placeholder">
                <img src="${movie.poster}" alt="${movie.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="card-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta"><span>${movie.year}</span><span class="rating"><i class="fa-solid fa-star"></i> ${movie.rating}</span></div>
                <span class="genre-tag">${movie.genre}</span>
            </div>
        `;
        movieGrid.appendChild(card);
    });
}

function initFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const genreParam = urlParams.get('genre');

    if (genreParam) {
        currentGenre = genreParam;
        
        genreBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-genre').toLowerCase() === genreParam.toLowerCase()) {
                btn.classList.add('active');
            }
        });

        searchInput.placeholder = `Searching in ${genreParam}...`;
    }
}

searchInput.addEventListener('input', (e) => { 
    searchQuery = e.target.value; 
    renderMovies(); 
});

genreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        genreBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentGenre = btn.getAttribute('data-genre');
        
        const newUrl = currentGenre === 'all' 
            ? window.location.pathname 
            : `${window.location.pathname}?genre=${currentGenre}`;
        window.history.pushState({}, '', newUrl);

        renderMovies();
    });
});

initFromURL();
renderMovies();