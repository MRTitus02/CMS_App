import { prismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: prismaAdapter(prisma),
  session: {
    strategy: 'jwt',
    },
    pages: {
        signIn: '/sign-in',
    },
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    ],

    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                const dbUser = await prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                    select: {
                        id: true,
                        name: true,
                        username: true,
                        email: true,
                        image:true,
                        role:true,
                    },
                });

                if (dbUser) {
                    token.id = dbUser.id;
                    token.name = dbUser.name;
                    token.username = dbUser.username;
                    token.email = dbUser.email;
                    token.image = dbUser.image;
                    token.role = dbUser.role;
                } else {
                    const newUser = await prisma.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            role: "user",
                        },
                    });
                    token.id = newUser.id;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.image = token.image;
                session.user.role = token.role;
            }
            return session;
        },
        redirect() {
            return "/dashboard";
        }
    }
};

export const getAuthSession = () => getServerSession(authOptions);