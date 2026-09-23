async function loadInterviews() {
    try {
        const applications = await authenticatedRequest("/applications/");
        if (!applications) return;

        const interviews = [];
        for (const application of applications) {
            const applicationInterviews = await authenticatedRequest(
                `/applications/${application.id}/interviews`
            );
            applicationInterviews.forEach(function(interview) {
                interviews.push({ ...interview, company_name: application.company_name, job_title: application.job_title });
            });
        }

        const list = document.getElementById("interviewsList");
        document.getElementById("interviewsMessage").textContent =
            `${interviews.length} interview${interviews.length === 1 ? "" : "s"}`;

        if (interviews.length === 0) {
            list.innerHTML = '<p class="empty-message">No interviews yet.</p>';
            return;
        }

        list.innerHTML = interviews.map(function(interview) {
            return `<div class="application-item">
                <div><strong>${interview.company_name}</strong><p>${interview.job_title}</p>
                <p>${new Date(interview.interview_date).toLocaleString()}</p></div>
                <span class="status-badge">${interview.interview_type || "Interview"}</span>
            </div>`;
        }).join("");
    } catch (error) {
        console.error("Interviews error:", error);
        document.getElementById("interviewsMessage").textContent =
            "Unable to load interviews.";
    }
}

loadInterviews();
