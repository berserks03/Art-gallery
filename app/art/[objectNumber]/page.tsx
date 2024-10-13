import { CollectionDetailsResponse } from '@/types/CollectionDetailsResponse';
import Image from 'next/image';
import { fetchArtObject } from '@/app/utils/fetchArtObject';
import { notFound } from 'next/navigation';
import ActionButton from '@/app/components/ActionButton';

export default async function ArtDetailsPage({ params }: { params: { objectNumber: string } }) {
    const collectionDetail: CollectionDetailsResponse = await fetchArtObject(params.objectNumber);

    if (!collectionDetail) {
        notFound();
    }

    const description =
        collectionDetail.artObject.plaqueDescriptionEnglish ||
        collectionDetail.artObject.description;

    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <h1 className='text-4xl font-bold mb-4 text-blue-600'>
                {collectionDetail.artObject.title}
            </h1>
            {collectionDetail.artObject.webImage?.url ? (
                <Image
                    src={collectionDetail.artObject.webImage.url}
                    alt={collectionDetail.artObject.title}
                    width={collectionDetail.artObject.webImage.width}
                    height={collectionDetail.artObject.webImage.height}
                    className='max-w-full max-h-full object-contain mb-4 rounded-lg'
                />
            ) : (
                <p className='text-gray-500'>No image available</p>
            )}
            <p className='text-lg text-gray-700 mb-4'>{description}</p>
            <p className='text-md text-gray-500'>
                <strong>Artist:</strong> {collectionDetail.artObject.principalOrFirstMaker}
            </p>
            <p className='text-md text-gray-500'>
                <strong>Year:</strong> {collectionDetail.artObject.dating.presentingDate}
            </p>

            <ActionButton isBackButton label='Back to Gallery' />
        </div>
    );
}
