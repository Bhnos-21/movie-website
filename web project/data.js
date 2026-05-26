const moviesDB = [
    { 
        id: "inception", title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8,
        desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        director: "Christopher Nolan", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    { 
        id: "the-dark-knight", title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0,
        desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        director: "Christopher Nolan", cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
    },
    { 
        id: "interstellar", title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6,
        desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan", cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    { 
        id: "parasite", title: "Parasite", year: 2019, genre: "Drama", rating: 8.6,
        desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        director: "Bong Joon Ho", cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png"
    },
    { 
        id: "superbad", title: "Superbad", year: 2007, genre: "Comedy", rating: 7.6,
        desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        director: "Greg Mottola", cast: "Jonah Hill, Michael Cera, Christopher Mintz-Plasse",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png"
    },
    { 
        id: "get-out", title: "Get Out", year: 2017, genre: "Horror", rating: 7.7,
        desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        director: "Jordan Peele", cast: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png"
    },
    { 
        id: "the-notebook", title: "The Notebook", year: 2004, genre: "Romance", rating: 7.8,
        desc: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
        director: "Nick Cassavetes", cast: "Gena Rowlands, James Garner, Rachel McAdams",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"
    },
    { 
        id: "mad-max-fury-road", title: "Mad Max: Fury Road", year: 2015, genre: "Action", rating: 8.1,
        desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        director: "George Miller", cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg"
    },
    { 
        id: "blade-runner-2049", title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", rating: 8.0,
        desc: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        director: "Denis Villeneuve", cast: "Harrison Ford, Ryan Gosling, Ana de Armas",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png"
    },
    { 
        id: "joker", title: "Joker", year: 2019, genre: "Drama", rating: 8.4,
        desc: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
        director: "Todd Phillips", cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        poster: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg"
    },
    { 
        id: "toy-story", title: "Toy Story", year: 1995, genre: "Comedy", rating: 8.3,
        desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        director: "John Lasseter", cast: "Tom Hanks, Tim Allen, Don Rickles",
        poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
    },
    { 
        id: "a-quiet-place", title: "A Quiet Place", year: 2018, genre: "Horror", rating: 7.5,
        desc: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
        director: "John Krasinski", cast: "Emily Blunt, John Krasinski, Millicent Simmonds",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png"
    },
    { 
        id: "la-la-land", title: "La La Land", year: 2016, genre: "Romance", rating: 8.0,
        desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        director: "Damien Chazelle", cast: "Ryan Gosling, Emma Stone, Rosemarie DeWitt",
        poster: "https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png"
    },
    { 
        id: "john-wick", title: "John Wick", year: 2014, genre: "Action", rating: 7.4,
        desc: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        director: "Chad Stahelski", cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg"
    },
    { 
        id: "shawshank-redemption", title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3,
        desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont", cast: "Tim Robbins, Morgan Freeman, Bob Gunton",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
    }
];