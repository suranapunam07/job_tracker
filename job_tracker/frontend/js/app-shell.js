const API_URL = "http://127.0.0.1:8000";
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

async function authenticatedRequest(path) {
    const response = await fetch(`${API_URL}${path}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (response.status === 401) {
        localStorage.removeItem("access_token");
        window.location.href = "index.html";
        return null;
    }

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}
