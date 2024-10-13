import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Rijksmuseum Shuffle',
    description: 'Explore random art pieces from Rijksmuseum',
};

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <html lang='en'>
            <body className='bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 min-h-screen'>
                <div className='flex flex-col min-h-screen'>

                    <header className='bg-white shadow-md py-6'>
                        <div className='container mx-auto px-4 text-center'>
                            <h1 className='text-4xl font-bold text-blue-600'>
                                Rijksmuseum Shuffle
                            </h1>
                        </div>
                    </header>

                    <main className='flex-grow container mx-auto px-4 py-10'>{children}</main>

                    <footer className='bg-gray-800 text-white py-4 mt-8'>
                        <div className='container mx-auto px-4 text-center'>
                            <p className='text-sm'>
                                © {new Date().getFullYear()} Rijksmuseum Shuffle | All Rights
                                Reserved
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
