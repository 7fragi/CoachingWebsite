document.addEventListener('DOMContentLoaded', () => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      // Show the sun icon, hide the moon icon in dark mode
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      // Show the moon icon, hide the sun icon in light mode
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  
    // Dark mode toggle
    const toggleBtn = document.getElementById('mode-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Toggle visibility of the icons
        if (document.body.classList.contains('dark-mode')) {
          sunIcon.style.display = 'block';  // Show Sun icon in dark mode
          moonIcon.style.display = 'none';  // Hide Moon icon in dark mode
        } else {
          sunIcon.style.display = 'none';  // Hide Sun icon in light mode
          moonIcon.style.display = 'block';  // Show Moon icon in light mode
        }
        
        // Save the theme in localStorage
        localStorage.setItem(
          'theme',
          document.body.classList.contains('dark-mode') ? 'dark' : 'light'
        );
      });
    }
  
    // Profile photo toggle (only on index.html)
    const photo = document.getElementById('profile-photo');
    if (photo) {
      let toggled = false;
      photo.addEventListener('click', () => {
        toggled = !toggled;
        photo.src = toggled ? 'website photo 2.jpg' : 'website foto.jpg';
      });
    }
});
