function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('active');
}

function toggleTrimester(subjectId) {
    const subjectList = document.getElementById(subjectId);
    subjectList.classList.toggle('active');
}
