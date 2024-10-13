import { CollectionImageResponse } from '@/types/CollectionImageResponse';
import { CollectionResponse } from '@/types/CollectionResponse';
import { Culture } from '@/types/Culture';
import { Format } from '@/types/Format';
import { Result } from '@/types/Result';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
        return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
    }

    const perPage = 3;
    const maxTotalObjects = 10000;
    const maxPageNumber: number = maxTotalObjects / perPage;
    const randomPageNumber: number = Math.floor(Math.random() * (maxPageNumber + 1));
    const baseUrl: string = 'https://www.rijksmuseum.nl/api';
    const culture: Culture = 'en';
    const format: Format = 'json';
    const onlyResultsWithImage: boolean = false;

    const collectionUrl = `${baseUrl}/${culture}/collection?key=${API_KEY}&format=${format}&p=${randomPageNumber}&ps=${perPage}&imgonly=${onlyResultsWithImage}`;

    const collectionResult: Result = await fetch(collectionUrl);

    if (!collectionResult.ok) {
        return NextResponse.json({ error: 'Failed to fetch art pieces' }, { status: 500 });
    }

    const data: CollectionResponse = await collectionResult.json();
    const artObjects = data.artObjects;

    const tilesPromises = artObjects.map(async (artObject) => {
        const objectNumber = artObject.objectNumber;
        const tileUrl = `${baseUrl}/${culture}/collection/${objectNumber}/tiles?key=${API_KEY}`;

        const tileResult: Result = await fetch(tileUrl);

        const tileData: CollectionImageResponse = await tileResult.json();

        const singleTileLevels = tileData.levels.filter((level) => level.tiles.length === 1);

        if (singleTileLevels.length > 0) {
            const smallestTileLevel = singleTileLevels.reduce((prev, curr) => {
                return parseInt(curr.name.substring(1)) < parseInt(prev.name.substring(1))
                    ? curr
                    : prev;
            });

            return {
                ...artObject,
                webImage: {
                    ...artObject.webImage,
                    url: smallestTileLevel.tiles[0].url,
                    width: smallestTileLevel.width,
                    height: smallestTileLevel.height,
                },
            };
        }

        return { ...artObject, image: null };
    });

    const artObjectsWithTiles = await Promise.all(tilesPromises);

    return NextResponse.json({ artObjects: artObjectsWithTiles });
};
