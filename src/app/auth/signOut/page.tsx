"use client"
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { CircularProgress } from "@mui/material";

export default function SignOutPage() {
    useEffect(() => {
        signOut({ redirect: true, callbackUrl: "/" });
    }, []);

    return (
        <>
            <CircularProgress/>
            <p>Signing out...</p>
        </>
    )
}
