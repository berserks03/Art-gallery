import { CollectionDetailsResponse } from '@/types/CollectionDetailsResponse';
import { CollectionImageResponse } from '@/types/CollectionImageResponse';
import { Culture } from '@/types/Culture';
import { Format } from '@/types/Format';
import { Result } from '@/types/Result';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const API_KEY = process.env.API_KEY;

    if (!API_KEY) {
        return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
    }

    
    
    const { searchParams } = req.nextUrl;
    const objectNumber = searchParams.get('id');

    if (!objectNumber) {
        return NextResponse.json({ message: 'Missing id parameter pa isto' }, { status: 400 });
    }

    const baseUrl = 'https://www.rijksmuseum.nl/api';
    const culture: Culture = 'en';
    const format: Format = 'json';

    try {
        const response: Result = await fetch(`${baseUrl}/${culture}/collection/${objectNumber}?key=${API_KEY}&format=${format}`);

        if (!response.ok) {
            return NextResponse.json({ message: 'Art object not found' }, { status: response.status });
        }

        const data: CollectionDetailsResponse = await response.json();
    
        const tileUrl = `${baseUrl}/${culture}/collection/${objectNumber}/tiles?key=${API_KEY}`;
        const tileResult: Result = await fetch(tileUrl);

        if (!tileResult.ok) {
            return NextResponse.json({ message: 'Tiles not found' }, { status: tileResult.status });
        }

        const tileData: CollectionImageResponse = await tileResult.json();
        const singleTileLevels = tileData.levels.filter((level) => level.tiles.length === 1);

        if (singleTileLevels.length > 0) {
            const smallestTileLevel = singleTileLevels.reduce((prev, curr) => {
                return parseInt(curr.name.substring(1)) < parseInt(prev.name.substring(1)) ? curr : prev;
            });

            const modifiedData = {
                ...data,
                artObject: {
                    ...data.artObject,
                    webImage: {
                        ...data.artObject.webImage,
                        url: smallestTileLevel.tiles[0].url,
                        width: smallestTileLevel.width,
                        height: smallestTileLevel.height,
                    },
                },
            };

            return NextResponse.json({ data: modifiedData }, { status: 200 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: `Internal Server Error: ${error}` }, { status: 500 });
    }
};
