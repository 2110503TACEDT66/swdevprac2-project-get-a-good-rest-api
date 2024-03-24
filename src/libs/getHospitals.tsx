export default async function getMassages() {
    
    // add timeout for loading delay testing
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/massages`);
    if (!response.ok) {
        throw new Error("Failed to fetch massages")
    }


    return await response.json();
}