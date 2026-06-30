const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        console.log("api data", data)

        return data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};