function getApiErrorMessage(data, fallback) {
    if (typeof data?.detail === "string") {
        return data.detail;
    }

    if (Array.isArray(data?.detail)) {
        return data.detail
            .map(function(error) {
                return error.msg || "Invalid input";
            })
            .join(". ");
    }

    return fallback;
}
