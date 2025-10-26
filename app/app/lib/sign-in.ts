import { authClient } from "@/app/lib/auth-client"; //import the auth client

export const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "twitter",
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/dashboard",
    })
    return data
}