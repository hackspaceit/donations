// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'https://free-summer-vibes.vercel.app' : 'https://free-summer-vibes.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '';
