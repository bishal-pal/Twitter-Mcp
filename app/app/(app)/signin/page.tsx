"use client"

import { signIn } from "@/app/lib/sign-in"
import { useState } from "react"

export default function SignInPage() {
    const [isLoading, setIsLoading] = useState(false)

    return (
    <div>
        <button onClick={() => {
            setIsLoading(true)
            signIn().then((data) => {
                setIsLoading(false)
            })
        }}>
            {isLoading ? "Loading..." : "Signin with Twitter"}
        </button>
    </div>
    )
}
