"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function deleteReservation() {

    const session = await getServerSession(authOptions);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${session?.user.token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to delete reservations")
    }

    return await response.json();
}