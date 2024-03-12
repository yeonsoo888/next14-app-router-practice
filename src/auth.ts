import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
  signIn
} = NextAuth({
  pages: {
    signIn: '/i/flow/login',
    newUser: '/i/flow/signup'
  },
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
          ...user
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 1 // 1시간
  }
});
