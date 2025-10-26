import { authClient } from "@/app/lib/auth-client"; 
import { redirect } from "next/navigation";

// Sign out the user & redirect to the signin page
export const signOut = async() => {
    await authClient.signOut({
        fetchOptions: {
            onSuccess: () => {
                redirect("/signin");
            },
        },
    });
}