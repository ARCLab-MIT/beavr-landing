window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Hold last frame for intro video when it ends
    var introVideo = document.getElementById('tree');
    if (introVideo) {
        // Ensure loop is disabled even if set in HTML
        introVideo.loop = false;
        introVideo.removeAttribute('loop');

        introVideo.addEventListener('ended', function () {
            try {
                var epsilon = 0.04; // seconds; seek just before the real end
                this.currentTime = Math.max(0, (this.duration || 0) - epsilon);
                this.pause();
            } catch (e) {
                // no-op
            }
        });
    }

})
