import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'View List',


    },
    

  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/banners.png`,
    aspectRatio: '1.91:1',
  },

  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'List Airdrop Potential',
  description: 'List of potential airdrops',
  openGraph: {
    title: 'List Airdrop Potential',
    description: 'List of potential airdrops',
    images: [`${NEXT_PUBLIC_URL}/banners.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>5 Airdrop Potential 2024</h1>
     <center> <img src="/banners.png"></img></center>
    </>
  );
}
