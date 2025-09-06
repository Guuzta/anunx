import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import axios from "axios"

const nextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },

            async authorize(credentials) {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/signin`, {
                    email: credentials.email,
                    password: credentials.password
                })

                const user = response.data

                if (user._id) {
                    return user
                }

                return null
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/auth/signin'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        
        async jwt({ token, user}) {
            if (user) {
                token.id = user._id ?? user.id
            }

            return token
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
            }

            return session
        }
    }
}

const handler = NextAuth(nextAuthOptions)

export { 
    handler as GET, 
    handler as POST,
    nextAuthOptions
}