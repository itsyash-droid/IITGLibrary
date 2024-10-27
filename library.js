// Function to show the dropdown on hover
function showDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = "block";
}

// Function to hide the dropdown when the mouse leaves
function hideDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = "none";
}

// Attach event listeners to each dropdown button
document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown button");

    dropdownButtons.forEach(button => {
        // Get the associated dropdown content ID
        const dropdownId = button.getAttribute("onclick").replace("toggleDropdown('", "").replace("')", "");
        
        // Add mouseenter and mouseleave events
        button.addEventListener("mouseenter", function() {
            showDropdown(dropdownId);
        });

        button.addEventListener("mouseleave", function() {
            hideDropdown(dropdownId);
        });

        // Ensure dropdown content hides when the mouse leaves it as well
        const dropdownContent = document.getElementById(dropdownId);
        dropdownContent.addEventListener("mouseleave", function() {
            hideDropdown(dropdownId);
        });

        // To keep dropdown visible when hovering over content
        dropdownContent.addEventListener("mouseenter", function() {
            showDropdown(dropdownId);
        });
    });
});
