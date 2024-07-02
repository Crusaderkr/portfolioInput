document.addEventListener("DOMContentLoaded", () => {
    // Profile Form
    const profileForm = document.getElementById("profile-form");
    const profileDetails = document.getElementById("profile-details");

    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const introduction = document.getElementById("introduction").value;
        const email = document.getElementById("email").value;
        const linkedin = document.getElementById("linkedin").value;

        const profileImage = document.getElementById("profile-image").files[0];
        const resume = document.getElementById("resume").files[0];

        const reader = new FileReader();
        reader.readAsDataURL(profileImage);
        reader.onload = function () {
            const profileImageData = reader.result;

            const resumeReader = new FileReader();
            resumeReader.readAsDataURL(resume);
            resumeReader.onload = function () {
                const resumeData = resumeReader.result;

                const profile = { name, introduction, email, linkedin, profileImageData, resumeData };
                localStorage.setItem("profile", JSON.stringify(profile));
                displayProfile();
            };
        };
    });

    function displayProfile() {
        const profile = JSON.parse(localStorage.getItem("profile"));
        if (profile) {
            profileDetails.innerHTML = `
                <h3>${profile.name}</h3>
                <img id="profile-image-preview" src="${profile.profileImageData}" alt="Profile Image" width="100">
                <p>${profile.introduction}</p>
                <p>Email: <a href="mailto:${profile.email}">${profile.email}</a></p>
                <p>LinkedIn: <a href="${profile.linkedin}" target="_blank">${profile.linkedin}</a></p>
                <a id="resume-link" href="${profile.resumeData}" target="_blank">View Resume</a>
            `;
        }
    }
    displayProfile();

    // Achievements Form
    const achievementForm = document.getElementById("achievement-form");
    const achievementsList = document.getElementById("achievements-list");

    achievementForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("achievement-title").value;
        const details = document.getElementById("achievement-details").value;

        const achievements = JSON.parse(localStorage.getItem("achievements")) || [];
        achievements.push({ title, details });
        localStorage.setItem("achievements", JSON.stringify(achievements));
        displayAchievements();
    });

    function displayAchievements() {
        const achievements = JSON.parse(localStorage.getItem("achievements")) || [];
        achievementsList.innerHTML = achievements.map(achievement => `
            <div>
                <h3>${achievement.title}</h3>
                <p>${achievement.details}</p>
            </div>
        `).join("");
    }
    displayAchievements();

    // Projects Form
    const projectForm = document.getElementById("project-form");
    const projectsList = document.getElementById("projects-list");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("project-title").value;
        const details = document.getElementById("project-details").value;

        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        projects.push({ title, details });
        localStorage.setItem("projects", JSON.stringify(projects));
        displayProjects();
    });

    function displayProjects() {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        projectsList.innerHTML = projects.map(project => `
            <div>
                <h3>${project.title}</h3>
                <p>${project.details}</p>
            </div>
        `).join("");
    }
    displayProjects();

    // Experience Form
    const experienceForm = document.getElementById("experience-form");
    const experienceList = document.getElementById("experience-list");

    experienceForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const title = document.getElementById("experience-title").value;
        const details = document.getElementById("experience-details").value;

        const experiences = JSON.parse(localStorage.getItem("experiences")) || [];
        experiences.push({ title, details });
        localStorage.setItem("experiences", JSON.stringify(experiences));
        displayExperiences();
    });

    function displayExperiences() {
        const experiences = JSON.parse(localStorage.getItem("experiences")) || [];
        experienceList.innerHTML = experiences.map(experience => `
            <div>
                <h3>${experience.title}</h3>
                <p>${experience.details}</p>
            </div>
        `).join("");
    }
    displayExperiences();

    // Final Upload Button
    const uploadButton = document.getElementById("upload-button");
    uploadButton.addEventListener("click", () => {
        window.location.href = ".//Output//portfolio.html";
    });
});

