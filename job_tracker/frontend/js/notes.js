async function loadApplications() {

    try {

        const applications =
            await authenticatedRequest(
                "/applications/"
            );


        if (!applications) {
            return;
        }


        const select =
            document.getElementById(
                "noteApplication"
            );


        select.innerHTML =
            '<option value="">Select application</option>';


        applications.forEach(
            function(application) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    application.id;


                option.textContent =
                    `${application.company_name} - ${application.job_title}`;


                select.appendChild(option);

            }
        );

    } catch (error) {

        console.error(
            "Applications error:",
            error
        );

    }
}


async function loadNotes() {

    try {

        const applications =
            await authenticatedRequest(
                "/applications/"
            );


        if (!applications) {
            return;
        }


        const notes = [];


        for (
            const application of applications
        ) {

            const applicationNotes =
                await authenticatedRequest(
                    `/applications/${application.id}/notes`
                );


            if (!applicationNotes) {
                continue;
            }


            applicationNotes.forEach(
                function(note) {

                    notes.push({

                        ...note,

                        company_name:
                            application.company_name,

                        job_title:
                            application.job_title

                    });

                }
            );

        }


        const list =
            document.getElementById(
                "notesList"
            );


        document.getElementById(
            "notesMessage"
        ).textContent =
            `${notes.length} note${
                notes.length === 1 ? "" : "s"
            }`;


        if (notes.length === 0) {

            list.innerHTML =
                '<p class="empty-message">No notes yet.</p>';

            return;
        }


        notes.sort(
            function(a, b) {

                return new Date(b.created_at) -
                    new Date(a.created_at);

            }
        );


        list.innerHTML =
            notes.map(
                function(note) {

                    return `
                        <div class="application-item">

                            <div>

                                <strong>
                                    ${note.company_name}
                                </strong>

                                <p>
                                    ${note.job_title}
                                </p>

                                <p>
                                    ${note.content}
                                </p>

                                <p>
                                    ${new Date(
                                        note.created_at
                                    ).toLocaleString()}
                                </p>

                            </div>

                        </div>
                    `;

                }
            ).join("");

    } catch (error) {

        console.error(
            "Notes error:",
            error
        );


        document.getElementById(
            "notesMessage"
        ).textContent =
            "Unable to load notes.";

    }
}


const noteForm =
    document.getElementById(
        "noteForm"
    );


if (noteForm) {

    noteForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            const applicationId =
                document.getElementById(
                    "noteApplication"
                ).value;


            const content =
                document.getElementById(
                    "noteContent"
                ).value;


            const message =
                document.getElementById(
                    "noteMessage"
                );


            if (!applicationId) {

                message.textContent =
                    "Please select an application.";

                return;
            }


            try {

                await authenticatedRequest(
                    `/applications/${applicationId}/notes`,
                    {
                        method: "POST",

                        body: JSON.stringify({

                            content:
                                content

                        })
                    }
                );


                message.textContent =
                    "Note added successfully!";


                noteForm.reset();


                await loadNotes();

            } catch (error) {

                console.error(
                    "Add note error:",
                    error
                );


                message.textContent =
                    error.message ||
                    "Unable to add note.";

            }

        }
    );

}


loadApplications();
loadNotes();