import { DefaultSession } from 'next-auth';
// eslint-disable-next-line
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      nickname: string;
      image: string;
      address: string;
    } & DefaultSession['user'];
  }
}
