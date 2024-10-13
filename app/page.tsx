'use client';

import { useEffect, useState } from 'react';
import { ArtObject } from '@/types/ArtObject';
import { fetchArtObjects } from './utils/fetchArtObjects';
import ArtObjectCard from './components/ArtObjectCard';
import ActionButton from './components/ActionButton';

const Home = () => {
    const [artObjects, setArtObjects] = useState<ArtObject[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleFetchArtObjects = async () => {
        setIsLoading(true);
        setError('');

        try {
            const data = await fetchArtObjects();
            setArtObjects(data);
            localStorage.setItem('artObjects', JSON.stringify(data));
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const storedArtObjects = localStorage.getItem('artObjects');
        if (storedArtObjects) {
            setArtObjects(JSON.parse(storedArtObjects));
        } else {
            handleFetchArtObjects();
        }
    }, []);

    const handleShuffle = () => handleFetchArtObjects();

    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-4'>
            {isLoading ? (
                <div className='min-h-[500px] flex flex-col items-center justify-center'>
                    <div className='w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4'></div>
                    <p className='text-lg font-semibold text-blue-700'>Loading... hopefully soon</p>
                </div>
            ) : error ? (
                <p className='text-red-500'>{error}</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
                    {artObjects.map((artObject) => (
                        <ArtObjectCard key={artObject.id} artObject={artObject} />
                    ))}
                </div>
            )}

            <ActionButton onClickAction={handleShuffle} label='Shuffle Art' />
        </div>
    );
};

export default Home;
