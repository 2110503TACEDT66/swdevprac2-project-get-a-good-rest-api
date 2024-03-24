"use client"
import { TextField } from "@mui/material"
import userRegister from "@/libs/userRegister"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Role } from "../../../../interface"

export default function Page() {

    const router = useRouter()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [telephone, setTelephone] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = useState<string>("")

    const onSubmit = async () => {
        if (name && email && telephone && password && passwordConfirm) {
            
            if (password == passwordConfirm) {
                const userRegisterJson = JSON.parse(JSON.stringify({name: name, email: email, telephone: telephone, password: password}))
                const res = await userRegister(userRegisterJson, Role.User);
                
                if (res.success) {
                    router.push("/auth/signIn")
                } else {
                    alert("Failed to register")
                }

            } else alert("Passwords do not match")
            
        } else alert("Please fill in all fields")
    }

    return (
        <div className="flex flex-col items-center m-[30px]">
            <TextField id="name" label="name" variant="standard" onChange={(e) => setName(e.target.value)}/>
            <TextField id="email" label="email" variant="standard" type="email" onChange={(e) => setEmail(e.target.value)}/>
            <TextField id="telephone" label="telephone" variant="standard" type="tel" onChange={(e) => setTelephone(e.target.value)}/>
            <TextField id="password" label="password" variant="standard" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <TextField id="passwordConfirm" label="confirm password" variant="standard" type="password" onChange={(e) => setPasswordConfirm(e.target.value)}/>
            <button onClick={() => onSubmit()} className="p-4 bg-blue-200 m-3 rounded">Register</button>
        </div>
    )
}