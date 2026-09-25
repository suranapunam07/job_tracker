const token = localStorage.getItem("access_token");

if (!token) {
    window.location.href = "index.html";
}


async function loadDashboard() {

    try {

        const statsResponse = await fetch(
            "https://job-tracker-backend-qs1x.onrender.com/stats/",
            {
                method: "GET",

                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        if (!statsResponse.ok) {

            if (statsResponse.status === 401) {

                localStorage.removeItem(
                    "access_token"
                );

                window.location.href =
                    "index.html";

                return;
            }

            throw new Error(
                "Unable to load statistics"
            );
        }


        const stats =
            await statsResponse.json();


        document.getElementById(
            "totalApplications"
        ).textContent =
            stats.total_applications || 0;


        document.getElementById(
            "appliedApplications"
        ).textContent =
            stats.by_status?.applied || 0;


        document.getElementById(
            "interviewApplications"
        ).textContent =
            stats.by_status?.interview || 0;


        document.getElementById(
            "rejectedApplications"
        ).textContent =
            stats.by_status?.rejected || 0;


        document.getElementById(
            "offerApplications"
        ).textContent =
            stats.by_status?.offer || 0;


        const applicationsResponse =
            await fetch(
                "https://job-tracker-backend-qs1x.onrender.com/applications/",
                {
                    method: "GET",

                    headers: {
                        "Authorization":
                            `Bearer ${token}`
                    }
                }
            );


        if (!applicationsResponse.ok) {

            if (
                applicationsResponse.status === 401
            ) {

                localStorage.removeItem(
                    "access_token"
                );

                window.location.href =
                    "index.html";

                return;
            }

            throw new Error(
                "Unable to load applications"
            );
        }


        const applications =
            await applicationsResponse.json();


        displayApplications(
            applications
        );


        displayDeadlines(
            applications
        );


    } catch (error) {

        console.error(
            "Dashboard error:",
            error
        );

    }
}


function displayApplications(
    applications
) {

    const container =
        document.getElementById(
            "recentApplications"
        );


    if (!container) {
        return;
    }


    if (applications.length === 0) {

        container.innerHTML =
            '<p class="empty-message">No applications yet.</p>';

        return;
    }


    const recentApplications =
        applications
            .slice(-5)
            .reverse();


    container.innerHTML = "";


    recentApplications.forEach(
        function(application) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "application-item";


            item.innerHTML = `
                <div>
                    <strong>
                        ${application.company_name}
                    </strong>

                    <p>
                        ${application.job_title}
                    </p>
                </div>

                <span class="status-badge">
                    ${application.status}
                </span>
            `;


            container.appendChild(item);

        }
    );
}


function displayDeadlines(
    applications
) {

    const container =
        document.getElementById(
            "upcomingDeadlines"
        );


    if (!container) {
        return;
    }


    const applicationsWithDeadlines =
        applications
            .filter(
                function(application) {

                    return application.deadline;

                }
            )
            .sort(
                function(a, b) {

                    return new Date(
                        a.deadline
                    ) -
                    new Date(
                        b.deadline
                    );

                }
            )
            .slice(0, 5);


    if (
        applicationsWithDeadlines.length === 0
    ) {

        container.innerHTML =
            '<p class="empty-message">No upcoming deadlines.</p>';

        return;
    }


    container.innerHTML = "";


    applicationsWithDeadlines.forEach(
        function(application) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "deadline-item";


            item.innerHTML = `
                <div>
                    <strong>
                        ${application.company_name}
                    </strong>

                    <p>
                        ${application.job_title}
                    </p>
                </div>

                <span>
                    ${application.deadline}
                </span>
            `;


            container.appendChild(item);

        }
    );
}


/* ADD APPLICATION */

const applicationForm =
    document.getElementById(
        "applicationForm"
    );


if (applicationForm) {

    applicationForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const companyName =
                document.getElementById(
                    "companyName"
                ).value;


            const jobTitle =
                document.getElementById(
                    "jobTitle"
                ).value;


            const status =
                document.getElementById(
                    "applicationStatus"
                ).value;


            const appliedDate =
                document.getElementById(
                    "appliedDate"
                ).value;


            const deadline =
                document.getElementById(
                    "deadline"
                ).value;


            const salary =
                document.getElementById(
                    "salary"
                ).value;


            const message =
                document.getElementById(
                    "applicationMessage"
                );


            message.textContent = "";


            try {

                const response =
                    await fetch(
                        "https://job-tracker-backend-qs1x.onrender.com/applications/",
                        {
                            method: "POST",

                            headers: {
                                "Content-Type":
                                    "application/json",

                                "Authorization":
                                    `Bearer ${token}`
                            },

                            body:
                                JSON.stringify({

                                    company_name:
                                        companyName,

                                    job_title:
                                        jobTitle,

                                    status:
                                        status,

                                    applied_date:
                                        appliedDate,

                                    deadline:
                                        deadline ||
                                        null,

                                    salary:
                                        salary
                                            ? Number(
                                                salary
                                            )
                                            : null

                                })
                        }
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    message.textContent =
                        data.detail ||
                        "Unable to add application.";

                    return;
                }


                message.textContent =
                    "Application added successfully!";


                applicationForm.reset();


                await loadDashboard();

            } catch (error) {

                console.error(
                    "Application error:",
                    error
                );


                message.textContent =
                    "Unable to connect to server.";

            }

        }
    );
}


/* LOGOUT */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "access_token"
            );

            window.location.href =
                "index.html";

        }
    );
}


loadDashboard();