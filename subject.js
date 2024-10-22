// Add click animation to buttons (optional for user feedback)
const weekButtons = document.querySelectorAll('.week-btn');

weekButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)'; // Temporary scale down on click
        setTimeout(() => this.style.transform = 'scale(1)', 100); // Return to normal state after click
    });
});
