document.addEventListener('DOMContentLoaded', function() {
    const nightModeButton = document.querySelectorAll('.night-mode-button');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('night-mode') === 'enabled') {
        body.classList.add('night-mode');
        nightModeButton.forEach(button => button.innerHTML = '<i class="fas fa-sun"></i>'); // Sun icon for day mode
    } else {
        nightModeButton.forEach(button => button.innerHTML = '<i class="fas fa-moon"></i>'); // Moon icon for night mode
    }

    nightModeButton.forEach(button => {
        button.addEventListener('click', function() {
            if (body.classList.contains('night-mode')) {
                body.classList.remove('night-mode');
                nightModeButton.forEach(button => button.innerHTML = '<i class="fas fa-moon"></i>'); // Moon icon for night mode
                localStorage.setItem('night-mode', 'disabled');
            } else {
                body.classList.add('night-mode');
                nightModeButton.forEach(button => button.innerHTML = '<i class="fas fa-sun"></i>'); // Sun icon for day mode
                localStorage.setItem('night-mode', 'enabled');
            }
        });
    });
});
