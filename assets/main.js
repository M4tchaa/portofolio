// Toggle
function toggleDetail(stepId) {
    const detail = document.getElementById(stepId);
    detail.classList.toggle('hidden');
}

// Career Path Section
document.addEventListener('DOMContentLoaded', function() {
    // Array of files and corresponding element IDs
    const includes = [
        { file: 'layout/header.html', id: 'header' },
        { file: 'layout/navbar.html', id: 'navbar' },
        { file: 'layout/home.html', id: 'home' },
        { file: 'layout/footer.html', id: 'footer' }
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

// Fungsi untuk menambahkan career path steps
function initializeCareerPathSteps() {
    const steps = [
        {
            title: "Sales Administrative Assistant",
            company: "PT Eliman Herbal Indonesia",
            description: "Order Processing, Inventory Monitoring, Administrative Support, etc.",
            date: "Jan 2019 - Dec 2019",
            alignment: "right"
        },
        {
            title: "Warehouse Manager",
            company: "PT Eliman Herbal Indonesia",
            description: "Inventory Management, Warehouse Organization, Shipping Coordination, Quality Control, etc.",
            date: "Dec 2019 - Nov 2023",
            alignment: "right"
        },
        {
            title: "Selling Manager",
            company: "PT Eliman Herbal Indonesia",
            description: "Team Leadership, Client Relationship Management, Business Development, Market Analysing, Communication management, etc.",
            date: "Nov 2020 - Nov 2023",
            alignment: "right"
        },
        {
            title: "Buying Manager",
            company: "PT Eliman Herbal Indonesia",
            description: "Supplier Identification and Negotiation, Market and Demand analysis, Budget management, Cost Balance, etc.",
            date: "Nov 2021 - Nov 2023",
            alignment: "right"
        },
        {
            title: "FrontEnd Developer Intern",
            company: "PT Jago Inovasi Bisnis",
            description: "Web Design Implementation, Coding and Development, UI Development, UX Development, API Integration, etc.",
            date: "Dec 2023 - Present",
            alignment: "left"
        }
    ];

    const careerPathSteps = document.getElementById("career-path-steps");
    if (!careerPathSteps) return;  // Exit if the element is not found

    steps.forEach((step, index) => {
        const alignmentClass = step.alignment === "right" ? "text-right pr-8" : "text-left pl-8";
        const side = step.alignment === "right"
            ? `<div class="w-1/2 ${alignmentClass}">
                    <h3 class="text-lg font-semibold">${step.title}</h3>
                    <h6 class="text-sm text-gray-600 italic">${step.company}</h6>
                    <p class="text-gray-600 text-justify ml-auto max-w-md mt-3">${step.description}</p>
                    <div class="flex items-center justify-end mt-2">
                    <p class="text-white bg-blue-500 italic inline-block px-4 py-1">${step.date}</p>
                    ${step.title === "FrontEnd Developer Intern" ? `<a href="https://google.com" class="text-blue-500 hover:underline ml-4">See My Portfolio <i class="fa-solid fa-arrow-right ml-2"></i></a>` : ''}
                </div>
                </div><div class="w-1/2"></div>`
            : `<div class="w-1/2"></div><div class="w-1/2 ${alignmentClass}">
                    <h3 class="text-lg font-semibold">${step.title}</h3>
                    <h6 class="text-sm text-gray-600 italic">${step.company}</h6>
                    <p class="text-gray-600 text-justify mr-auto max-w-md mt-3">${step.description}</p>
                    <div class="flex justify-start mt-2">
                    <p class="text-white bg-blue-500 italic inline-block px-4 py-1">${step.date}</p>
                    ${step.title === "FrontEnd Developer Intern" ? `<a href="#project" class="text-blue-500 hover:underline ml-4">See My Portfolio <i class="fa-solid fa-arrow-right ml-2"></i></a>` : ''}
                </div>
                </div>`;
    
        careerPathSteps.innerHTML += `
            <div class="relative mb-10 md:mb-18 flex items-center">
                ${side}
                <div class="absolute left-1/2 transform -translate-x-1/2">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold z-10"></div>
                </div>
            </div>
        `;
    });        
}

// Initialize Skills Section
function initializeSkills() {
    const leftSkills = [
        { name: "HTML", width: "90%", color: "bg-blue-500" },
        { name: "CSS", width: "80%", color: "bg-blue-500" },
        { name: "JavaScript", width: "70%", color: "bg-blue-500" },
        { name: "TailwindCSS", width: "40%", color: "bg-blue-500" },
        { name: "Bootstrap", width: "60%", color: "bg-blue-500" },
    ];

    const rightSkills = [
        { name: "PHP", width: "70%", color: "bg-blue-500" },
        { name: "GIT", width: "75%", color: "bg-blue-500" },
        { name: "MySQL", width: "73%", color: "bg-blue-500" },
        { name: "Code Igniter", width: "56%", color: "bg-blue-500" },
    ];

    function createSkillElement(skill) {
        return `
            <div class="flex items-center ${skill.justifyEnd ? 'justify-end' : ''}">
                <div class="text-lg font-medium w-1/3 ${skill.textAlignRight ? 'text-right' : ''}">${skill.name}</div>
                <div class="w-2/3 ${skill.marginLeft ? 'ml-9' : ''}">
                    <div class="relative bg-gray-200 h-4 rounded-full">
                        <div class="skill-bar ${skill.color} h-4 rounded-full" style="width: ${skill.width}; --width: ${skill.width};"></div>
                    </div>
                </div>
            </div>
        `;
    }

    const leftSkillsContainer = document.getElementById('left-skills');
    const rightSkillsContainer = document.getElementById('right-skills');

    if (leftSkillsContainer) {
        leftSkills.forEach(skill => {
            leftSkillsContainer.innerHTML += createSkillElement(skill);
        });
    }

    if (rightSkillsContainer) {
        rightSkills.forEach(skill => {
            rightSkillsContainer.innerHTML += createSkillElement({ ...skill, justifyEnd: true, textAlignRight: true, marginLeft: true });
        });
    }
}

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
