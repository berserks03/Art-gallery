import { ArtObject } from '@/types/ArtObject';
import { Result } from '@/types/Result';

export const fetchArtObjects = async (): Promise<ArtObject[]> => {
    const result: Result = await fetch('/api/getArtObjects');

    if (!result.ok) {
        throw new Error('Failed to fetch art pieces');
    }

    const data = await result.json();
    return data.artObjects;
};
