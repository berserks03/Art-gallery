import Image from 'next/image';
import { ArtObject } from '@/types/ArtObject';
import Link from 'next/link';

interface ArtObjectCardProps {
    artObject: ArtObject;
}

const ArtObjectCard = ({ artObject }: ArtObjectCardProps) => {
    return (
        <Link href={`/art/${artObject.objectNumber}`} passHref>
            <div className='flex flex-col items-center  p-4 rounded-lg  h-full min-h-[300px] justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50'>
                {artObject.webImage?.url ? (
                    <Image
                        src={artObject.webImage.url}
                        alt={artObject.title}
                        width={artObject.webImage.width}
                        height={artObject.webImage.height}
                        className='max-w-full max-h-100 object-contain mb-4 rounded-lg'
                    />
                ) : (
                    <p className='text-gray-500'>No image available</p>
                )}
                <h2 className='text-xl font-semibold text-gray-700 mt-4'>{artObject.title}</h2>
            </div>
        </Link>
    );
};

export default ArtObjectCard;
