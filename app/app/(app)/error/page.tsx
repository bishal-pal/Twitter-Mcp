"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function ErrorPage() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const errorDescription = searchParams.get('error_description')

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-12 w-12 text-red-600">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Authentication Error
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {errorDescription || "You weren't able to give access to the App. Go back and try logging in again."}
                    </p>
                </div>
                
                <div className="mt-8 space-y-6">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                            <p className="font-medium">Error Code: {error}</p>
                        </div>
                    )}
                    
                    <div className="space-y-4">
                        <Link
                            href="/signin"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            Try Again
                        </Link>
                        
                        <Link
                            href="/"
                            className="group relative w-full flex justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                            Go Home
                        </Link>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-xs text-gray-500">
                            If this problem persists, please check your Twitter app configuration or contact support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
