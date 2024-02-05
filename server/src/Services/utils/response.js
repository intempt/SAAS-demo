export const responseStatuses = {
    success : "success",
    error: "error"
}

export const decodeResponse = (response) => {
    return typeof response === "string" ? JSON.parse(response) : response;
}