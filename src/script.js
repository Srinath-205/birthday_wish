document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const mainContent = document.getElementById('main-content');
    const photoGallery = document.getElementById('photo-gallery');
    const interactiveWish = document.getElementById('interactive-wish');
    const birthdayVideo = document.getElementById('birthday-video');
    const videoElement = document.getElementById('celebration-video');
    
    const photos = document.querySelectorAll('.slideshow-photo');
    // const texts = document.querySelectorAll('.slide-text');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;
    const totalSlides = photos.length;

 
    const messageTextarea = document.getElementById('message-text');
    const showSurpriseButton = document.getElementById('show-surprise');
    const fullMessage = "My dearest friend, As I sit here thinking about all our memories together, I can't help but smile. From our late-night talks to our spontaneous adventures, you've filled my life with so much joy and laughter. You've been my shoulder to cry on, my partner in crime, and my biggest supporter. On your special day, I want you to know how grateful I am to have you. Happy Birthday to my favorite person in the world! Here's to more wonderful memories, friendship, laughter, and endless love! 💕";
    
    // Helper function for delays
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ⭐ Slideshow Logic
    function updateSlide(newIndex) {
        // Wrap around logic
        if (newIndex >= totalSlides) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = totalSlides - 1;
        }
        
        // Remove active class from current elements
        photos[currentSlide].classList.remove('active');
        // texts[currentSlide].classList.remove('active');

        // Add active class to new elements
        photos[newIndex].classList.add('active');
        // texts[newIndex].classList.add('active');
        
        currentSlide = newIndex;
        
        // Change Next button text on the last slide to transition to next section
        if (currentSlide === totalSlides - 1) {
            nextButton.textContent = "Next Surprise →";
        } else {
            nextButton.textContent = "Next Photo →";
        }

        // Hide the Previous button on the first slide
        prevButton.style.opacity = currentSlide === 0 ? '0' : '1';
        prevButton.style.pointerEvents = currentSlide === 0 ? 'none' : 'auto';
    }

    function goToNextSection() {
        photoGallery.classList.add('hidden');
        interactiveWish.classList.remove('hidden');
        interactiveWish.classList.add('fade-in');
        typeMessage(); // Start the typing animation in the message box
    }

    // ⭐ Message Typing Effect
    async function typeMessage() {
        messageTextarea.value = ''; // Clear placeholder
        for (let i = 0; i < fullMessage.length; i++) {
            messageTextarea.value += fullMessage.charAt(i);
            // Adjust delay for typing speed
            await delay(i < 50 ? 50 : 25); 
        }
        showSurpriseButton.style.display = 'block';
    }

    // ⭐ Fullscreen Logic
    function launchFullScreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    // --- Event Listeners ---

    // 1. Initial Start
    startButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Initialize slideshow
        updateSlide(0); 
    });

    // 2. Slideshow Controls
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            updateSlide(currentSlide - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            updateSlide(currentSlide + 1);
        } else {
            // Last slide clicked: move to next section
            goToNextSection();
        }
    });

    // 3. Final Surprise (Video)
    showSurpriseButton.addEventListener('click', async () => {
        interactiveWish.classList.add('hidden');
        birthdayVideo.classList.remove('hidden');
        birthdayVideo.classList.add('fade-in');
        
        // Scroll to the video section
        birthdayVideo.scrollIntoView({ behavior: 'smooth' });
        
        await delay(1000); // Wait for the scroll and fade-in
        
        // Play video fullscreen
        launchFullScreen(videoElement);
        videoElement.play();
    });
});
document.addEventListener('DOMContentLoaded', function() {

    const backgroundMusic = document.getElementById('background-music');

    startButton.addEventListener('click', () => {

        backgroundMusic.play().catch(error => {
            console.log("Autoplay was prevented, user will need to interact with the audio player if it were visible.");
        }); 

        startScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Initialize slideshow
        updateSlide(0); 
    });

    // ... (Rest of the script remains the same) ...
});

document.addEventListener('DOMContentLoaded', function() {
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const mainContent = document.getElementById('main-content');
    const photoGallery = document.getElementById('photo-gallery');
    const interactiveWish = document.getElementById('interactive-wish');
    const birthdayVideo = document.getElementById('birthday-video');
    const videoElement = document.getElementById('celebration-video');
    
    const photos = document.querySelectorAll('.slideshow-photo');
    // const texts = document.querySelectorAll('.slide-text');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;
    const totalSlides = photos.length;

    // ⭐ NEW: Audio element declaration
    const backgroundMusic = document.getElementById('background-music'); // <-- ADD THIS LINE
 
    const messageTextarea = document.getElementById('message-text');
    const showSurpriseButton = document.getElementById('show-surprise');
    const fullMessage = "My dearest friend, As I sit here thinking about all our memories together, I can't help but smile. From our late-night talks to our spontaneous adventures, you've filled my life with so much joy and laughter. You've been my shoulder to cry on, my partner in crime, and my biggest supporter. On your special day, I want you to know how grateful I am to have you. Happy Birthday to my favorite person in the world! Here's to more wonderful memories, friendship, laughter, and endless love! 💕";
    
    // Helper function for delays
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ⭐ Slideshow Logic
    // ... (rest of updateSlide function) ...

    function goToNextSection() {
        photoGallery.classList.add('hidden');
        interactiveWish.classList.remove('hidden');
        interactiveWish.classList.add('fade-in');
        typeMessage(); // Start the typing animation in the message box
    }

  
    startButton.addEventListener('click', () => {
        // ⭐ CRITICAL NEW LINE: Start the background music!
        backgroundMusic.play().catch(error => {
             console.log("Autoplay was prevented. User may need to interact with the page again.");
        }); 

        startScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Initialize slideshow
        updateSlide(0); 
    });

    // ... (Rest of event listeners) ...
});