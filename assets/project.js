// Toggle
function toggleDetail(stepId) {
    const detail = document.getElementById(stepId);
    detail.classList.toggle('hidden');
}

// Career Path Section
document.addEventListener('DOMContentLoaded', function() {
    // Array of files and corresponding element IDs
    const includes = [
        { file: '../layout/header.html', id: 'header' },
        { file: '../layout/navbar.html', id: 'navbar' },
        // { file: '../layout/home.html', id: 'home' },
        { file: '../layout/footer.html', id: 'footer' }
    ];

    // Fetch all files in parallel and update corresponding elements
    Promise.all(includes.map(include => 
        fetch(include.file).then(response => response.text())
    )).then(data => {
        data.forEach((home, index) => {
            document.getElementById(includes[index].id).innerHTML = home;
        });

        // Jalankan kode berikut setelah konten berhasil dimuat ke dalam #content
        initializeCareerPathSteps();
        initializeSkills();  // Add this function to initialize skills
    }).catch(error => console.error('Error loading includes:', error));
});

function toggleMenu() {
    const menu = document.getElementById("full-screen-menu");
    const toggleButton = document.getElementById("nav-toggle");
    const body = document.body;

    if (menu.classList.contains("show")) {
        // Trigger closing animation
        menu.classList.add("close");
        menu.classList.remove("show");
        toggleButton.classList.remove("open");

        // Remove 'close' class after transition ends
        setTimeout(() => {
            menu.classList.remove("close");
        }, 500); // Match the duration of the CSS transition

        // Enable scrolling
        body.style.overflow = '';
    } else {
        // Trigger opening animation
        menu.classList.add("show");
        toggleButton.classList.add("open");

        // Disable scrolling
        body.style.overflow = 'hidden';
    }
}
