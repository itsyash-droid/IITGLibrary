// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Highlight current menu item
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Smooth Scroll to Sections
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
