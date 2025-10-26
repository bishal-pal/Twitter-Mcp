import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./db";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    baseURL: process.env.BETTER_AUTH_URL,
    socialProviders: { 
        twitter: { 
            clientId: process.env.TWITTER_ID as string, 
            clientSecret: process.env.TWITTER_SECRET as string,
            scope: ["tweet.write", "dm.write"] // necessary scopes
        },
    },
    plugins: [nextCookies()],
});