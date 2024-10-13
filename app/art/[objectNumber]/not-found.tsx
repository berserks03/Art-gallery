import ActionButton from '@/app/components/ActionButton';

const NotFound = () => {
   
    return (
        <div className='min-h-screen flex flex-col items-center justify-start p-4 pt-24'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-lg text-center'>
                <h1 className='text-4xl font-bold text-blue-600 mb-4'>Art Object Not Found</h1>
                <p className='text-lg text-gray-700 mb-8'>
                    The requested art piece does not exist or has been removed.
                </p>
                <ActionButton isBackButton label='Back to Gallery' />
            </div>
        </div>
    );
};

export default NotFound;
