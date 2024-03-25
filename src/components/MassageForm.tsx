"use client"
import { useState, useEffect } from "react"
import { TextField } from "@mui/material"
import getMassage from "@/libs/getMassage"
import editMassage from "@/libs/editMassage"
import createMassage from "@/libs/createMassage"
import { MassageItem } from "../../interface"

export default function MassageForm(isUpdate:boolean, id: string | null) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [district, setDistrict] = useState("")
    const [province, setProvince] = useState("")
    const [postalcode, setPostalcode] = useState("")
    const [tel, setTel] = useState("")
    const [picture, setPicture] = useState("no-photo")

    // fetching data from the server
    if (isUpdate) {
        useEffect(() => {
            const fetchMassage = async () => {
                if (id === null) return
                const res = await getMassage(id);
                
                setName(res.name)
                setDescription(res.description)
                setAddress(res.address)
                setDistrict(res.district)
                setProvince(res.province)
                setPostalcode(res.postalcode)
                setTel(res.tel)
                setPicture(res.picture)
            }
            fetchMassage()
        }, [])
    }

    const onSubmit = async () => {
        const data:MassageItem = {
            name: name,
            description: description,
            address: address,
            district: district,
            province: province,
            postalcode: postalcode,
            tel: tel,
            picture: picture,
            _id: "",
            __v: 0,
            id: ""
        }
        if (isUpdate) {
            // update data
            if (id === null) return console.log("id is null while editing massage");
            await editMassage(id, data)
        } else {
            // create data
            await createMassage(data)
        }
    }

    return (
        <div>
            <TextField id="name" label="name" variant="standard" type="text" value={name} onChange={(e) => (setName(e.target.value))} />
            <TextField id="description" label="description" variant="standard" type="text" value={description} onChange={(e) => (setDescription(e.target.value))} />
            <TextField id="address" label="address" variant="standard" type="text" value={address} onChange={(e) => (setAddress(e.target.value))} />
            <TextField id="district" label="district" variant="standard" type="text" value={district} onChange={(e) => (setDistrict(e.target.value))} />
            <TextField id="province" label="province" variant="standard" type="text" value={province} onChange={(e) => (setProvince(e.target.value))} />
            <TextField id="postalcode" label="postalcode" variant="standard" type="text" value={postalcode} onChange={(e) => (setPostalcode(e.target.value))} />
            <TextField id="tel" label="tel" variant="standard" type="text" value={tel} onChange={(e) => (setTel(e.target.value))} />
            <TextField id="picture" label="picture" variant="standard" type="text" value={picture} onChange={(e) => (setPicture(e.target.value))} />

            <button className="p-2 bg-green-400" onClick={() => onSubmit()}>{isUpdate ? "Update" : "Create"}</button>
        </div>
    )

}