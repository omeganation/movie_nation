document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");

    // Ensure the loader is shown
    loader.style.display = "flex";
    loader.style.opacity = "1";

    // Wait for full load
    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 1200); // Delay before hiding loader
    });

    // Show loader again when user clicks links or buttons
    document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("click", () => {
            loader.style.display = "flex";
            loader.style.opacity = "1";
        });
    });
});

// Favorite System
document.addEventListener('DOMContentLoaded', function () {
    // Initialize favorites
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Set up favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const card = btn.closest('.movie-card');
        const movieId = card.dataset.movieId;

        // Mark as favorite if already saved
        if (favorites.includes(movieId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="bx bxs-heart"></i>';
        }

        // Handle clicks
        btn.addEventListener('click', function () {
            const movieId = card.dataset.movieId;

            // Toggle favorite
            if (favorites.includes(movieId)) {
                favorites = favorites.filter(id => id !== movieId);
                btn.classList.remove('active');
                btn.innerHTML = '<i class="bx bx-heart"></i>';
            } else {
                favorites.push(movieId);
                btn.classList.add('active');
                btn.innerHTML = '<i class="bx bxs-heart"></i>';
                btn.style.animation = 'heartBeat 0.6s ease';
            }

            // Save to storage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });

    // Load favorites page if needed
    if (window.location.pathname.includes('favorites.html')) {
        loadFavoritesPage();
    }
});

// Favorites Page Loader
function loadFavoritesPage() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const container = document.querySelector('.favorites-container') || document.createElement('div');

    if (favorites.length === 0) {
        container.innerHTML = `
        <div class="no-favorites">
          <i class='bx bx-heart' style="font-size: 50px; color: #ccc;"></i>
          <h3>No favorites yet</h3>
          <p>Tap the heart icon on movies to add some!</p>
        </div>
      `;
    } else {
        container.innerHTML = '';
        favorites.forEach(movieId => {
            // Clone the original movie card (simplified example)
            const movie = document.querySelector(`.movie-card[data-movie-id="${movieId}"]`);
            if (movie) {
                const clone = movie.cloneNode(true);
                container.appendChild(clone);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get all favorite buttons
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    // Load saved favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Initialize buttons
    favoriteBtns.forEach(btn => {
        const movieId = btn.dataset.movieId;
        if (favorites.includes(movieId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="bx bxs-heart"></i>'; // Solid heart
        }
    });

    // Handle clicks
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const movieId = this.dataset.movieId;

            // Reset animation
            this.style.animation = 'none';
            void this.offsetWidth; // Trigger reflow

            if (this.classList.contains('active')) {
                // Remove favorite
                this.classList.remove('active');
                this.innerHTML = '<i class="bx bx-heart"></i>';
                favorites = favorites.filter(id => id !== movieId);
            } else {
                // Add favorite
                this.classList.add('active');
                this.innerHTML = '<i class="bx bxs-heart"></i>';
                this.style.animation = 'heartBeat 0.6s ease';
                favorites.push(movieId);
            }

            // Save to localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});

// Favorite functionality
document.addEventListener('DOMContentLoaded', function () {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Initialize buttons
    favoriteBtns.forEach(btn => {
        const card = btn.closest('.movie-card');
        const movieId = card.getAttribute('data-movie-id');

        if (favorites.includes(movieId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="bx bxs-heart"></i>';
        }

        btn.addEventListener('click', function () {
            const icon = this.querySelector('i');

            if (this.classList.contains('active')) {
                // Remove from favorites
                favorites = favorites.filter(id => id !== movieId);
                this.classList.remove('active');
                icon.classList.replace('bxs-heart', 'bx-heart');
            } else {
                // Add to favorites
                favorites.push(movieId);
                this.classList.add('active');
                icon.classList.replace('bx-heart', 'bxs-heart');
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const trailerBtn = document.getElementById('trailer-btn');
    const youtubeEmbed = document.getElementById('youtube-embed');
    const closeTrailer = document.querySelector('.close-trailer');

    // Replace with your actual YouTube video ID
    const youtubeVideoId = "YOUR_YOUTUBE_VIDEO_ID";

    trailerBtn.addEventListener('click', function (e) {
        e.preventDefault();

        // Set the iframe source
        const iframe = youtubeEmbed.querySelector('iframe');
        iframe.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

        // Show the embed
        youtubeEmbed.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeTrailer.addEventListener('click', function () {
        const iframe = youtubeEmbed.querySelector('iframe');
        iframe.src = '';
        youtubeEmbed.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// ===== FAVORITE SYSTEM ===== //
document.addEventListener('DOMContentLoaded', function () {
    // Initialize favorites array
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Set up all favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const movieCard = btn.closest('.movie-card');
        const movieId = movieCard.dataset.movieId;

        // Mark as favorite if already saved
        if (favorites.includes(movieId)) {
            btn.innerHTML = '<i class="bx bxs-heart" style="color: #ff4d4d"></i>';
            btn.classList.add('active');
        }

        // Click handler
        btn.addEventListener('click', function () {
            const movieId = movieCard.dataset.movieId;

            if (favorites.includes(movieId)) {
                // Remove from favorites
                favorites = favorites.filter(id => id !== movieId);
                btn.innerHTML = '<i class="bx bx-heart"></i>';
                btn.classList.remove('active');
            } else {
                // Add to favorites
                favorites.push(movieId);
                btn.innerHTML = '<i class="bx bxs-heart" style="color: #ff4d4d"></i>';
                btn.classList.add('active');
                // Animation
                btn.style.transform = 'scale(1.3)';
                setTimeout(() => { btn.style.transform = 'scale(1)'; }, 300);
            }

            // Update localStorage
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });

    // Load favorites page if we're on it
    if (window.location.pathname.includes('favorites.html')) {
        loadFavorites();
    }
});

// ===== FAVORITES PAGE LOADER ===== //
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const container = document.querySelector('.favorites-container');

    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = `
        <div class="no-favorites">
          <i class='bx bx-heart'></i>
          <h3>No favorites yet</h3>
          <p>Like movies to see them here</p>
        </div>
      `;
        return;
    }

    container.innerHTML = '';

    favorites.forEach(movieId => {
        // Try to find original movie card
        const originalCard = document.querySelector(`.movie-card[data-movie-id="${movieId}"]`);

        if (originalCard) {
            const clone = originalCard.cloneNode(true);
            // Make sure the heart is filled
            const heart = clone.querySelector('.favorite-btn');
            heart.innerHTML = '<i class="bx bxs-heart" style="color: #ff4d4d"></i>';
            heart.classList.add('active');
            container.appendChild(clone);
        } else {
            // Fallback if card not found (for demo)
            const fallbackCard = document.createElement('div');
            fallbackCard.className = 'movie-card';
            fallbackCard.innerHTML = `
          <div class="movie-info">
            <h3>Movie ID: ${movieId}</h3>
            <p>(Original card not found)</p>
          </div>
        `;
            container.appendChild(fallbackCard);
        }
    });
}

//swipper

var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        900: {
            lidesPerView: 5,
            spaceBetween: 20,
        },
    }

});
const popularSwiper = new Swiper('.popular-content', {
    slidesPerView: 'auto', // Dynamic based on container
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: { spaceBetween: 15 },
        1024: { spaceBetween: 30 }
    }
});
//show video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myvideo = document.querySelector('#myvideo');
let closebtn = document.querySelector(".close.video");  // Fixed selector

playButton.onclick = () => {
    video.classList.add("show-video");
    // Auto play when click On Button
    myvideo.play();
};

closebtn.onclick = () => {
    video.classList.remove("show-video");
    // Pause On close Video
    myvideo.pause();
};

// Search functionality
document.getElementById('search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.movie-card').forEach(card => {
        const title = card.querySelector('.movie-title').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});



document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('trailer-frame').src = '';
    document.getElementById('trailer-modal').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.querySelector('.search-box .bx-search');

    // Get ALL movie boxes from BOTH sections
    const allMovies = [
        ...document.querySelectorAll('#popular .movie-box'),
        ...document.querySelectorAll('#movies .movie-box')
    ];

    function filterMovies() {
        const searchTerm = searchInput.value.toLowerCase();
        let hasMatches = false;

        allMovies.forEach(movie => {
            const title = movie.querySelector('.movie-title').textContent.toLowerCase();
            const genre = movie.querySelector('.movie-type').textContent.toLowerCase();

            const isVisible = title.includes(searchTerm) || genre.includes(searchTerm);
            movie.style.display = isVisible ? 'flex' : 'none'; // Use your card's display type

            if (isVisible) hasMatches = true;
        });

        // Show "no results" message if needed
        const noResults = document.getElementById('no-results') || createNoResultsMessage();
        noResults.style.display = hasMatches || searchTerm === '' ? 'none' : 'block';
    }

    function createNoResultsMessage() {
        const msg = document.createElement('div');
        msg.id = 'no-results';
        msg.style.display = 'none';
        msg.style.color = 'white';
        msg.style.textAlign = 'center';
        msg.style.padding = '2rem';
        msg.style.gridColumn = '1 / -1';
        msg.textContent = 'No movies found. Try another search!';
        document.querySelector('.movies-content').appendChild(msg);
        return msg;
    }

    // Event listeners
    searchInput.addEventListener('input', filterMovies);
    searchIcon.addEventListener('click', filterMovies);

    // Clear search when clicking the 'X' in search input (for Chrome)
    searchInput.addEventListener('search', function () {
        if (this.value === '') filterMovies();
    });
});


// Add to your existing main.js
window.addEventListener('hashchange', function () {
    if (window.location.hash === '#favorites') {
        document.getElementById('favorites').style.display = 'block';
        displayFavorites();
    } else {
        document.getElementById('favorites').style.display = 'none';
    }
});

// Update your favorite button click handler
btn.addEventListener('click', function (e) {
    e.preventDefault();
    const movieId = this.getAttribute('data-movie-id');

    // Reset animation
    this.style.animation = 'none';
    void this.offsetWidth; // Trigger reflow

    if (favorites.includes(movieId)) {
        // Remove animation
        this.classList.remove('active');
        this.innerHTML = '<i class="bx bx-heart"></i>';
        this.style.animation = 'heartPulse 0.6s ease reverse';
        favorites = favorites.filter(id => id !== movieId);
    } else {
        // Add animation
        this.classList.add('active');
        this.innerHTML = '<i class="bx bxs-heart"></i>';
        this.style.animation = 'heartPulse 0.6s ease';
        favorites.push(movieId);

        // Optional: Add confetti effect for special favorites
        if (movieId === "special-movie-id") {
            triggerConfetti();
        }
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
});

// Add this function to your main.js
function triggerConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}


// YouTube Trailer Functionality
const trailerBtn = document.getElementById('trailer-btn');
const youtubeEmbed = document.getElementById('youtube-embed');
const closeTrailer = document.querySelector('.close-trailer');

trailerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    youtubeEmbed.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent page scrolling
});

closeTrailer.addEventListener('click', function () {
    youtubeEmbed.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling

    // Reset the iframe to stop playback
    const iframe = youtubeEmbed.querySelector('iframe');
    iframe.src = iframe.src; // This reloads the iframe, stopping any video
});


// Add to your main.js
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.movie-slide'));
    const dotsContainer = document.querySelector('.nav-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.dot'));

    // Set up event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-rotate every 5 seconds
    let slideInterval = setInterval(nextSlide, 500000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(slideInterval));
    track.addEventListener('mouseleave', () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    });

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update active classes
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });

        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Indicator events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto-advance (optional)
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    // Remind Me buttons
    document.querySelectorAll('.btn-remind').forEach(btn => {
        btn.addEventListener('click', function () {
            const movieId = this.getAttribute('data-movie-id');
            // Add your reminder logic here
            alert(`We'll remind you about this movie (ID: ${movieId})!`);
        });
    });
});
