import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'See NFT List',


    },
    

  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/banner.png`,
    aspectRatio: '1:1',
  },

  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Summer NFT',
  description: 'LFG',
  openGraph: {
    title: 'Summer NFT',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/banner.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>SUMMER NFT</h1>
     <center> <img src="/banner.png"></img></center>
    </>
  );
}
