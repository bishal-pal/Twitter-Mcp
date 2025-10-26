"use client"

import { signOut } from "@/app/lib/sign-out";
import { useState } from "react";

export default function SignOutButton() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignOut = async () => {
        try {
            setIsLoading(true);
            await signOut();
        } catch (err) {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleSignOut}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold rounded-lg transition-all duration-200 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
            </svg>
            {isLoading ? "Signing out..." : "Sign Out"}
        </button>
    );
}