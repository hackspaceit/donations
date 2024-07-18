import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Get it Now',


    },
    

  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/banner.png`,
    aspectRatio: '1:1',
  },

  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Free mint 10 Summer NFT',
  description: 'Specials for Onchain Summer Vibes',
  openGraph: {
    title: 'Summer NFT',
    description: 'Specials for Onchain Summer Vibes',
    images: [`${NEXT_PUBLIC_URL}/photo-2.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Specials for Onchain Summer Vibes</h1>
    </>
  );
}
