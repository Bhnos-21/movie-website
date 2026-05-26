const genreList = document.getElementById('genreList');

const genresData = [
    {
        name: "Action",
        description: "High-octane adrenaline rushes featuring intense chases, epic battles, and heroic feats. Perfect for when you need an excitement boost.",
        image: "./images/action.jpg",
        color: "#e50914",
        details: {
            popular: ["John Wick", "Mad Max: Fury Road", "The Dark Knight"],
            decades: ["80s Classics", "90s Blockbusters", "Modern Era"],
            mood: ["Adrenaline", "Suspense", "Heroic"]
        }
    },
    {
        name: "Comedy",
        description: "Light-hearted films designed to make you laugh out loud. From witty rom-coms to slapstick humor and satirical masterpieces.",
        // Fresh, highly reliable image link for Comedy
        image: "./images/comedy.jpg",
        color: "#ffd700",
        details: {
            popular: ["Superbad", "Toy Story", "The Grand Budapest Hotel"],
            decades: ["Silent Era", "Golden Age", "Contemporary"],
            mood: ["Hilarious", "Wholesome", "Satirical"]
        }
    },
    {
        name: "Sci-Fi",
        description: "Explore the unknown through futuristic technology, space travel, and alternate realities. A journey into the mind-bending possibilities of tomorrow.",
        image: "./images/sci-fi.jpg",
        color: "#00d4ff",
        details: {
            popular: ["Inception", "Interstellar", "Blade Runner 2049"],
            decades: ["Retro Futurism", "Cyberpunk 90s", "Modern Sci-Fi"],
            mood: ["Mind-Bending", "Dystopian", "Hopeful"]
        }
    },
    {
        name: "Drama",
        description: "Deeply emotional stories that explore the human condition, complex relationships, and life's most challenging moments with raw intensity.",
        image: "./images/drama.jpg",
        color: "#9b59b6",
        details: {
            popular: ["Parasite", "Joker", "The Shawshank Redemption"],
            decades: ["Classic Cinema", "New Wave", "Indie Darlings"],
            mood: ["Emotional", "Thought-Provoking", "Intense"]
        }
    },
    {
        name: "Horror",
        description: "Spine-chilling tales designed to keep you on the edge of your seat. Featuring supernatural entities, psychological thrillers, and slashers.",
        image: "./images/horror.jpg",
        color: "#8b0000",
        details: {
            popular: ["Get Out", "A Quiet Place", "Hereditary"],
            decades: ["Universal Monsters", "Slasher 80s", "Psychological Modern"],
            mood: ["Terrifying", "Creepy", "Suspenseful"]
        }
    },
    {
        name: "Romance",
        description: "Heartwarming love stories that celebrate connection, passion, and the complexities of relationships. Guaranteed to tug at your heartstrings.",
        image: "./images/romance.jpg",
        color: "#ff69b4",
        details: {
            popular: ["The Notebook", "La La Land", "Pride & Prejudice"],
            decades: ["Golden Age Romance", "90s Rom-Coms", "Modern Love"],
            mood: ["Romantic", "Tearjerker", "Sweet"]
        }
    }
];

function renderGenres() {
    genreList.innerHTML = '';

    genresData.forEach(genre => {
        const totalCount = moviesDB.filter(m => m.genre === genre.name).length;

        const item = document.createElement('a');
        item.className = 'genre-item';
        item.href = `../Explore/explore.html?genre=${encodeURIComponent(genre.name)}`;

        const popularMoviesHtml = genre.details.popular.slice(0, 3).map(movie => 
            `<span class="tag-small">${movie}</span>`
        ).join('');

        const decadesHtml = genre.details.decades.map(dec => 
            `<span class="tag-outline">${dec}</span>`
        ).join('');

        item.innerHTML = `
            <div class="image-wrapper">
                <img src="${genre.image}" alt="${genre.name}" class="genre-image">
                <div class="image-overlay"></div>
            </div>
            <div class="genre-content">
                <div class="genre-header">
                    <h2 class="genre-name">${genre.name}</h2>
                    <span class="genre-count-badge">${totalCount} Titles</span>
                </div>
                
                <p class="genre-description">${genre.description}</p>
                
                <div class="details-grid">
                    <div class="detail-column">
                        <h4>Popular Now</h4>
                        <div class="tags-container">${popularMoviesHtml}</div>
                    </div>
                    <div class="detail-column">
                        <h4>Eras & Moods</h4>
                        <div class="tags-container">${decadesHtml}</div>
                    </div>
                </div>
            </div>
        `;
        
        genreList.appendChild(item);
    });
}

renderGenres();