export const fetchArtObject = async (id: string) => {
    
    const response = await fetch(`http://localhost:3000/api/getArtObject?id=${id}`);

    if (!response.ok) {
        return null;
    }

    const data = await response.json();
    
    return data.data;
};
