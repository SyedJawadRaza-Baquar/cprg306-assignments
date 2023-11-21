"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    console.log(user);

    const handleSignIn = async () => {
        try {
        await gitHubSignIn();
        } catch (error) {
        console.error("Error signing in with GitHub: ", error);
        }
    }

    const handleSignOut = async () => {
        try {
        await firebaseSignOut();
        } catch (error) {
        console.error("Error signing out: ", error);
        }
    }   

    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen px-4 py-2 m-4 text-red-600 text-xl text-center font-bold bg-gray-400 rounded border-blue-800">
            {user ? (
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <div><Link href="/week8/shopping-list">Shopping List</Link></div>
                    <button className="bg-zinc-600 border-blue-800 rounded-lg" onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <button className="bg-zinc-600 border-blue-800 rounded-lg" onClick={handleSignIn}>Sign In</button>
            )}
        </div>
    );
}