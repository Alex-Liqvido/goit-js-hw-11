const BASE_URL = "https://pixabay.com/api/";


export const pixabayApi = searchQuery => {
    const params = new URLSearchParams({
    key: "47510144-3a7cfc25704c8cb682269df00",
    q: searchQuery,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
})

return fetch(`${BASE_URL}?${params}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
})
}