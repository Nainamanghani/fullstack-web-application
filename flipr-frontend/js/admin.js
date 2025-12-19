const BASE_URL = "http://localhost:8094/api";

/* ================= PROJECT ================= */

const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

projectForm.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        title: projectTitle.value,
        description: projectDescription.value,
        link: projectLink.value,
        imageUrl: projectImage.value
    };

    fetch(`${BASE_URL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        projectForm.reset();
        loadProjects();
    });
});

function loadProjects() {
    fetch(`${BASE_URL}/projects`)
        .then(res => res.json())
        .then(data => {
            projectList.innerHTML = "";
            data.forEach(p => {
                projectList.innerHTML += `
                    <div class="admin-card">
                        <span>${p.title}</span>
                        <button onclick="deleteProject(${p.id})">🗑</button>
                    </div>
                `;
            });
        });
}

function deleteProject(id) {
    fetch(`${BASE_URL}/projects/${id}`, { method: "DELETE" })
        .then(() => loadProjects());
}

/* ================= CLIENT ================= */

const clientForm = document.getElementById("clientForm");
const clientList = document.getElementById("clientList");

clientForm.addEventListener("submit", e => {
    e.preventDefault();

    const data = {
        name: clientName.value,
        designation: clientDesignation.value,
        description: clientDescription.value,
        imageUrl: clientImage.value
    };

    fetch(`${BASE_URL}/clients`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        clientForm.reset();
        loadClients();
    });
});

function loadClients() {
    fetch(`${BASE_URL}/clients`)
        .then(res => res.json())
        .then(data => {
            clientList.innerHTML = "";
            data.forEach(c => {
                clientList.innerHTML += `
                    <div class="admin-card">
                        <span>${c.name}</span>
                        <button onclick="deleteClient(${c.id})">🗑</button>
                    </div>
                `;
            });
        });
}

function deleteClient(id) {
    fetch(`${BASE_URL}/clients/${id}`, { method: "DELETE" })
        .then(() => loadClients());
}

/* ================= CONTACT ================= */

function loadContacts() {
    fetch(`${BASE_URL}/contact`)
        .then(res => res.json())
        .then(data => {
            contactList.innerHTML = "";
            data.forEach(c => {
                contactList.innerHTML += `
                    <div class="admin-card">
                        <span>${c.fullName} (${c.email})</span>
                        <button onclick="deleteContact(${c.id})">🗑</button>
                    </div>
                `;
            });
        });
}

function deleteContact(id) {
    fetch(`${BASE_URL}/contact/${id}`, { method: "DELETE" })
        .then(() => loadContacts());
}

/* ================= NEWSLETTER ================= */

function loadNewsletter() {
    fetch(`${BASE_URL}/newsletter`)
        .then(res => res.json())
        .then(data => {
            newsletterList.innerHTML = "";
            data.forEach(n => {
                newsletterList.innerHTML += `
                    <div class="admin-card">
                        <span>${n.email}</span>
                        <button onclick="deleteSubscriber(${n.id})">🗑</button>
                    </div>
                `;
            });
        });
}

function deleteSubscriber(id) {
    fetch(`${BASE_URL}/newsletter/${id}`, { method: "DELETE" })
        .then(() => loadNewsletter());
}

/* ================= INIT ================= */
loadProjects();
loadClients();
loadContacts();
loadNewsletter();
