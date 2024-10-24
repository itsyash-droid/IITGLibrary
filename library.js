// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // Function to toggle dropdown visibility
    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        dropdown.classList.toggle('show');
    }

    // Event listeners for each trimester button
    document.querySelectorAll('.dropdown button').forEach(button => {
        button.addEventListener('click', () => {
            const dropdownId = button.nextElementSibling.id;
            toggleDropdown(dropdownId);

            // Hide other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(content => {
                if (content.id !== dropdownId) {
                    content.classList.remove('show');
                }
            });
        });
    });

    // Click outside to close dropdown
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropdown button')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });
});

