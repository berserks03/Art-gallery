import { headers } from 'next/headers';

export const fetchArtObject = async (id: string) => {
    const headersList = headers();
    const host = headersList.get('host');
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    const url = `${protocol}://${host}`;

    const response = await fetch(`${url}/api/getArtObject?id=${id}`);

    if (!response.ok) {
        return null;
    }

    const data = await response.json();

    return data.data;
};
