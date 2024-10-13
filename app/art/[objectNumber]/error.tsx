'use client'

export default function Error({ error }: { error: Error }) {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-4xl font-bold text-red-600'>Something went wrong!</h1>
            <p>{error.message}</p>
            <button
                onClick={() => history.back()}
                className='mt-6 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition'
            >
                Back to Gallery
            </button>
        </div>
    );
}
