import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
  signIn
} = NextAuth({
  pages: {},
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch('http://localhost:8080/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password
          })
        });

        const user = await authResponse.json();
        console.log(user);

        return {
          id: user.id,
          nickname: user.nickname,
          image: user.image,
          address: user.address
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }: { session: any; token: any }) {
      session.nickname = token.nickname;
      session.id = token.id;
      session.address = token.address;
      return session;
    }
  }
});
