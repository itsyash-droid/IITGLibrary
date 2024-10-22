
// Function to toggle trimester dropdown
function toggleTrimester(trimesterId) {
    const trimesterElement = document.getElementById(trimesterId);
    trimesterElement.classList.toggle('active');
    
    // Animate dropdown for subjects
    if (trimesterElement.classList.contains('active')) {
        trimesterElement.style.maxHeight = trimesterElement.scrollHeight + 'px';
    } else {
        trimesterElement.style.maxHeight = '0';
    }
}

// Function to add hover animation for trimester buttons
const trimesterButtons = document.querySelectorAll('.trimester-btn');

trimesterButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#6a6cc2'; // Change color on hover
    });
    btn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = ''; // Reset color after hover
    });
});

// Toggle menu for hamburger
function toggleMenu() {
    const menu = document.getElementById('menuOverlay');
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        menu.style.transform = 'translateY(0)';
    } else {
        menu.style.transform = 'translateY(-100%)';
    }
}
