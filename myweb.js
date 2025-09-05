
        // Target the button and set up event listeners
        let scrollButton = document.getElementById('scrollButton');
        let scrollUp = true;  // Flag to control scroll direction

        // Function to scroll the page
        function scrollPage() {
            if (scrollUp) {
                window.scrollBy(0, -100);  // Scroll up by 100px
            } else {
                window.scrollBy(0, 100);  // Scroll down by 100px
            }
            scrollUp = !scrollUp;  // Toggle the scroll direction
        }

        // Add event listener for button click
        scrollButton.addEventListener('click', scrollPage);
