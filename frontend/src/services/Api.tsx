export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`http://localhost:4000/${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw error;
  }
};
