// ================== BASE URL ==================
const BASE_URL = "http://localhost:8094/api";

/* ================== PROJECTS ================== */
document.addEventListener("DOMContentLoaded", () => {

    /* ---------- LOAD PROJECTS ---------- */
    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {
        fetch(`${BASE_URL}/projects`)
            .then(res => res.json())
            .then(projects => {
                projectsContainer.innerHTML = "";

                projects.forEach(project => {
                    const card = document.createElement("div");
                    card.className = "project-card";

                    card.innerHTML = `
                        <img src="${project.imageUrl || 'https://via.placeholder.com/300'}"
                             alt="${project.title}">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        ${
                            project.link
                                ? `<a href="${project.link}" target="_blank"
                                     style="display:inline-block;margin:10px 15px;color:#1e90ff;">
                                     View Project
                                   </a>`
                                : ''
                        }
                    `;

                    projectsContainer.appendChild(card);
                });
            })
            .catch(err => console.error("Project load error:", err));
    }

    /* ---------- LOAD CLIENTS ---------- */
    const clientsContainer = document.getElementById("clients-container");

    if (clientsContainer) {
        fetch(`${BASE_URL}/clients`)
            .then(res => res.json())
            .then(clients => {
                clientsContainer.innerHTML = "";

                clients.forEach(client => {
                    const card = document.createElement("div");
                    card.className = "client-card";

                    card.innerHTML = `
                        <img src="${client.imageUrl || 'https://via.placeholder.com/110'}"
                             class="client-img"
                             alt="${client.name}">
                        <h3>${client.name}</h3>
                        <h4>${client.designation || ''}</h4>
                        <p>${client.description || ''}</p>
                    `;

                    clientsContainer.appendChild(card);
                });
            })
            .catch(err => console.error("Client load error:", err));
    }
});

/* ================== CONTACT FORM ================== */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", e => {
        e.preventDefault();

        const data = {
            fullName: fullName.value,
            email: email.value,
            mobile: mobile.value,
            city: city.value
        };

        fetch(`${BASE_URL}/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Contact submitted successfully!");
                contactForm.reset();
            })
            .catch(err => console.error("Contact error:", err));
    });
}

/* ================== NEWSLETTER ================== */
const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
        e.preventDefault();

        const data = { email: newsletterEmail.value };

        fetch(`${BASE_URL}/newsletter`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Subscribed successfully!");
                newsletterForm.reset();
            })
            .catch(err => console.error("Newsletter error:", err));
    });
}
