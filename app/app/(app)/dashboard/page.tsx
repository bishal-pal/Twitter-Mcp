"use server"

import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutButton from "@/app/components/signOut";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        redirect("/signin")
    }

    const user = session.user;

    return (
        console.log(session),
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                            Twitter Post
                        </h1>
                    </div>
                    <SignOutButton />
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
                    <div className="flex items-center gap-6 mb-6">
                        <img
                            src={user.image ?? ""}
                            alt="Profile Picture"
                            className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg"
                        />
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                Welcome back! 👋
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                {user.name}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                <svg
                                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                                Display Name
                            </h3>
                        </div>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white">
                            {user.name}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                                <svg
                                    className="w-6 h-6 text-purple-600 dark:text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">
                                Email Address
                            </h3>
                        </div>
                        <p className="text-xl font-semibold text-gray-900 dark:text-white break-all">
                            {user.email}
                        </p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-blue-100 mb-6">
                        Start posting to Twitter and manage your content with ease.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                            Create New Post
                        </button>
                        <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-300 transition-colors">
                            View Posts
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}