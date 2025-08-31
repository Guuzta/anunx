import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
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
                const response = await axios.post(`${process.env.NEXTAUTH_URL}/api/signin`,{
                    email: credentials.email,
                    password: credentials.password
                })

                const user = response.data
                
                if(user._id) {
                    return user
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/auth/signin'
    },
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }