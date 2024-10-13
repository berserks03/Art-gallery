/* eslint-disable testing-library/no-unnecessary-act */
import Home from '@/app/page';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react';

describe('Home', () => {
    const fetchMock = jest.fn();

    beforeEach(() => {
        fetchMock
            .mockResolvedValueOnce({
                ok: true,
                json: () =>
                    Promise.resolve({
                        artObjects: [
                            {
                                webImage: {
                                    url: 'https://example.com/image1.jpg',
                                },
                                id: 1,
                            },
                            {
                                webImage: {
                                    url: 'https://example.com/image2.jpg',
                                },
                                id: 2,
                            },
                            {
                                webImage: {
                                    url: 'https://example.com/image3.jpg',
                                },
                                id: 3,
                            },
                        ],
                    }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: () =>
                    Promise.resolve({
                        artObjects: [
                            {
                                webImage: {
                                    url: 'https://example.com/image4.jpg',
                                },
                                id: 1,
                            },
                            {
                                webImage: {
                                    url: 'https://example.com/image5.jpg',
                                },
                                id: 2,
                            },
                            {
                                webImage: {
                                    url: 'https://example.com/image6.jpg',
                                },
                                id: 3,
                            },
                        ],
                    }),
            });

        global.fetch = fetchMock;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render three images', async () => {
        await act(async () => {
            render(<Home />);
        });

        const images = await screen.findAllByRole('img');

        expect(images).toHaveLength(3);
    });

    it('should render button with text "Shuffle Art"', async () => {
        await act(async () => {
            render(<Home />);
        });

        const button = screen.getByRole('button', { name: 'Shuffle Art' });

        expect(button).toBeInTheDocument();
    });

    it('should get new images after button is clicked', async () => {
        await act(async () => {
            render(<Home />);
        });

        const imagesBefore = await screen.findAllByRole('img');
        const imageSrcsBefore = imagesBefore.map((img) =>
            img.getAttribute('src')
        );

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: /shuffle/i });
        await user.click(button);

        const imagesAfter = await screen.findAllByRole('img');
        const imageSrcsAfter = imagesAfter.map((img) =>
            img.getAttribute('src')
        );

        expect(imageSrcsBefore).not.toEqual(imageSrcsAfter);
    });
});
