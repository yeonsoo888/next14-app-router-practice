declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      nickname: string;
      image: string;
      address: string;
    };
  }
}
