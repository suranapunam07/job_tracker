function renderApplications(applications) {
    const list = document.getElementById("applicationsList");
    if (applications.length === 0) {
        list.innerHTML = '<p class="empty-message">No applications yet.</p>';
        return;
    }

    list.innerHTML = applications.map(function(application) {
        const deadline = application.deadline
            ? `<p>Deadline: ${application.deadline}</p>`
            : "";
        return `<div class="application-item">
            <div><strong>${application.company_name}</strong><p>${application.job_title}</p>${deadline}</div>
            <span class="status-badge">${application.status}</span>
        </div>`;
    }).join("");
}

async function loadApplications() {
    try {
        const applications = await authenticatedRequest("/applications/");
        if (!applications) return;
        document.getElementById("applicationsMessage").textContent =
            `${applications.length} application${applications.length === 1 ? "" : "s"}`;
        renderApplications(applications);
    } catch (error) {
        console.error("Applications error:", error);
        document.getElementById("applicationsMessage").textContent =
            "Unable to load applications.";
    }
}

loadApplications();
