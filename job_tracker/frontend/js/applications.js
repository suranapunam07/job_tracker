function renderApplications(applications) {

    const list =
        document.getElementById("applicationsList");

    if (applications.length === 0) {

        list.innerHTML =
            '<p class="empty-message">No applications yet.</p>';

        return;
    }


    list.innerHTML =
        applications.map(function(application) {

            const deadline =
                application.deadline
                    ? `<p>Deadline: ${application.deadline}</p>`
                    : "";


            const salary =
                application.salary
                    ? `<p>Salary: ${application.salary}</p>`
                    : "";


            return `
                <div class="application-item">

                    <div>

                        <strong>
                            ${application.company_name}
                        </strong>

                        <p>
                            ${application.job_title}
                        </p>

                        <p>
                            Applied: ${application.applied_date}
                        </p>

                        ${deadline}

                        ${salary}

                    </div>


                    <div>

                        <span class="status-badge">
                            ${application.status}
                        </span>

                        <button
                            class="delete-btn"
                            onclick="deleteApplication(${application.id})"
                        >
                            Delete
                        </button>

                    </div>

                </div>
            `;

        }).join("");
}


async function loadApplications() {

    try {

        const applications =
            await authenticatedRequest(
                "/applications/"
            );


        if (!applications) {
            return;
        }


        document.getElementById(
            "applicationsMessage"
        ).textContent =
            `${applications.length} application${
                applications.length === 1 ? "" : "s"
            }`;


        renderApplications(applications);

    } catch (error) {

        console.error(
            "Applications error:",
            error
        );


        document.getElementById(
            "applicationsMessage"
        ).textContent =
            "Unable to load applications.";

    }
}


const applicationForm =
    document.getElementById(
        "applicationForm"
    );


if (applicationForm) {

    applicationForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const message =
                document.getElementById(
                    "applicationMessage"
                );


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


            try {

                const application =
                    await authenticatedRequest(
                        "/applications/",
                        {
                            method: "POST",

                            body: JSON.stringify({

                                company_name:
                                    companyName,

                                job_title:
                                    jobTitle,

                                job_url:
                                    null,

                                status:
                                    status,

                                applied_date:
                                    appliedDate,

                                deadline:
                                    deadline || null,

                                salary:
                                    salary
                                        ? Number(salary)
                                        : null

                            })
                        }
                    );


                if (!application) {
                    return;
                }


                message.textContent =
                    "Application added successfully!";


                applicationForm.reset();


                await loadApplications();

            } catch (error) {

                console.error(
                    "Add application error:",
                    error
                );


                message.textContent =
                    error.message ||
                    "Unable to add application.";

            }

        }
    );

}


async function deleteApplication(
    applicationId
) {

    const confirmed =
        confirm(
            "Are you sure you want to delete this application?"
        );


    if (!confirmed) {
        return;
    }


    try {

        await authenticatedRequest(
            `/applications/${applicationId}`,
            {
                method: "DELETE"
            }
        );


        await loadApplications();

    } catch (error) {

        console.error(
            "Delete application error:",
            error
        );

        alert(
            error.message ||
            "Unable to delete application."
        );

    }
}


loadApplications();