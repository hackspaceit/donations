// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'https://10summer-nft.vercel.app' : 'https://10summer-nft.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
