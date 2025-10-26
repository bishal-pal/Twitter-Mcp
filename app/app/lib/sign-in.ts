import { authClient } from "@/app/lib/auth-client";

// Sign in the user & redirect to the dashboard page
export const signIn = async () => {
    await authClient.signIn.social({
        provider: "twitter",
        callbackURL: "/dashboard",
        errorCallbackURL: "/error",
        newUserCallbackURL: "/dashboard",
    })
}