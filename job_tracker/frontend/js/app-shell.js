const API_URL = "https://job-tracker-backend-qs1x.onrender.com";

const accessToken = localStorage.getItem("access_token");

if (!accessToken) {
    window.location.href = "index.html";
}

const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("access_token");
        window.location.href = "index.html";
    });
}

async function authenticatedRequest(path, options = {}) {

    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        ...(options.headers || {})
    };

    if (options.body) {
        headers["Content-Type"] = "application/json";
    }

    const response = await fetch(
        `${API_URL}${path}`,
        {
            ...options,
            headers: headers
        }
    );

    if (response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.href = "index.html";
        return null;
    }

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.detail || `Request failed with status ${response.status}`
        );
    }

    return data;
}