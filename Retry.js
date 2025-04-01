const getData = async (retries = 3, delay = 2000) => {
    for (let i = 1; i <= retries; i++) {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return (await response.json()).products; // Return products directly
        } catch (error) {
            if (i === retries) throw error; // Throw error after last attempt
            await new Promise(res => setTimeout(res, delay)); // Wait before retrying
        }
    }
};

// Example usage:
getData()
    .then(console.log)
    .catch(console.error);

