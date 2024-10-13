const Loading = () => {
    return (
        <div className="min-h-[500px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-blue-700">Loading...</p>
        </div>
    );
};

export default Loading;
