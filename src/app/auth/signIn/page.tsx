"use client"
import { TextField } from "@mui/material"
import { useState } from "react"
import { signIn } from "next-auth/react"

export default function SignInPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = async () => {

        if (username && password) {
            const result = await signIn("credentials", {
                username: username,
                password: password,
                redirect: true,
                callbackUrl: "/",
            })
        }

    }

    return (
        <div className="flex flex-col items-center mt-20">  
                <TextField id="Username" label="Username" variant="standard" type="email" onChange={(e) => (setUsername(e.target.value))}/>
                <TextField id="Password" label="Password" variant="standard" type="password"
                onChange={(e) => (setPassword(e.target.value))}/>
            <p>{username + " " + password}</p>
                <button className="p-4 bg-gray-200 mt-5" onClick={() => onSubmit()}>Sign-In</button>
        </div>
    )
}