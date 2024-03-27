import MassageCatalog from "@/components/MassageCatalog";
import { render, screen, waitFor } from "@testing-library/react"
import { MassageJson } from "../interface";
import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/redux/ReduxProvider";
import { Role } from "../interface";

const mockResult:MassageJson = {
    "success": true,
    "count": 5,
    "pagination": {},
    "data": [
        {
            "_id": "6602f1e55275387a7855d32e",
            "name": "Haven",
            "address": "456 Sukhumvit Road",
            "district": "chula",
            "province": "Bangkok",
            "postalcode": "10110",
            "tel": "0823456793",
            "picture": "/img/masssage1.jpg",
            "description": "Restore your body and mind with our invigorating massage treatments.",
            "__v": 0,
            "reservations": [
                {
                    "_id": "66038492fc5b7401a495e1a9",
                    "apptDate": "2024-03-21T00:00:00.000Z",
                    "user": "66006ded286c4fde4c53674c",
                    "massage": "6602f1e55275387a7855d32e",
                    "createdAt": "2024-03-27T02:29:38.553Z",
                    "__v": 0
                },
                {
                    "_id": "66038498fc5b7401a495e1b1",
                    "apptDate": "2024-03-28T00:00:00.000Z",
                    "user": "66006ded286c4fde4c53674c",
                    "massage": "6602f1e55275387a7855d32e",
                    "createdAt": "2024-03-27T02:29:44.863Z",
                    "__v": 0
                },
                {
                    "_id": "6603d14090941d850f4b18d0",
                    "apptDate": "2024-03-28T00:00:00.000Z",
                    "user": "660057042718f9bc4a5502ad",
                    "massage": "6602f1e55275387a7855d32e",
                    "createdAt": "2024-03-27T07:56:48.370Z",
                    "__v": 0
                },
                {
                    "_id": "6603d14190941d850f4b18d5",
                    "apptDate": "2024-03-28T00:00:00.000Z",
                    "user": "660057042718f9bc4a5502ad",
                    "massage": "6602f1e55275387a7855d32e",
                    "createdAt": "2024-03-27T07:56:49.713Z",
                    "__v": 0
                }
            ],
            "id": "6602f1e55275387a7855d32e"
        },
        {
            "_id": "66015aa33c0bd4761fc599e0",
            "name": "Rejuvenate Spa",
            "address": "46/5 Ari Soi 2",
            "district": "Phaya Thai",
            "province": "Bangkok",
            "postalcode": "10400",
            "tel": "02-901-2345",
            "picture": "/img/massasge.jpg",
            "description": "Restore your body and mind with our invigorating massage treatments.",
            "__v": 0,
            "reservations": [
                {
                    "_id": "6603d13c90941d850f4b18c8",
                    "apptDate": "2024-03-28T00:00:00.000Z",
                    "user": "660057042718f9bc4a5502ad",
                    "massage": "66015aa33c0bd4761fc599e0",
                    "createdAt": "2024-03-27T07:56:44.645Z",
                    "__v": 0
                }
            ],
            "id": "66015aa33c0bd4761fc599e0"
        },
        {
            "_id": "660152f9527ce930e46714dd",
            "name": "The Serenity Spat best",
            "address": "123 Tranquility Lane",
            "district": "Bang sua",
            "province": "Bangkok",
            "postalcode": "10500",
            "tel": "1234567890",
            "picture": "/img/masssage3.jpg",
            "description": "Escape the hustle and bustle of city life with our soothing massage therapies.",
            "__v": 0,
            "reservations": [
                {
                    "_id": "66038d06c68d6ec1109cb624",
                    "apptDate": "2024-03-28T00:00:00.000Z",
                    "user": "66038cbc0e4c8696cc3a9301",
                    "massage": "660152f9527ce930e46714dd",
                    "createdAt": "2024-03-27T03:05:42.310Z",
                    "__v": 0
                }
            ],
            "id": "660152f9527ce930e46714dd"
        },
        {
            "_id": "66014f1d3ab7a4db54e4f1ab",
            "name": "Zen Harmony Massage",
            "address": "789 Silom Road",
            "district": "Bang Rak",
            "province": "Bangkok",
            "postalcode": "10500",
            "tel": "1234567890",
            "picture": "/img/massage2.jpg",
            "description": "Find your inner peace and balance with our Zen-inspired massage techniques.",
            "__v": 0,
            "reservations": [],
            "id": "66014f1d3ab7a4db54e4f1ab"
        },
        {
            "_id": "66038d9bc68d6ec1109cb647",
            "name": "ttttttdasd",
            "address": "ffff",
            "district": "ffff",
            "province": "fff",
            "postalcode": "12345",
            "tel": "5554567888",
            "picture": "no-photo",
            "description": "ffffff",
            "__v": 0,
            "reservations": [],
            "id": "66038d9bc68d6ec1109cb647"
        }
    ]
}

describe("MassageCatalog", () => {

    // Mock useSession
    jest.mock('next-auth/react', () => ({
        useSession() {
            return {
                data: null,
                user: {
                    data: {
                        "name": "Pongsaky",
                    }
                }
            }
        }
    }))

    it("Should have correct number of massage items", async () => {
        const massageCatalog = await MassageCatalog({massages: mockResult.data});
        render(<ReduxProvider>
            <SessionProvider session={{
                user: {
                    data: {
                        name: "Pongsaky",
                        _id: "",
                        email: "",
                        role: Role.User,
                        token: ""
                    },
                    token: ""
                },
                expires: "" // Add the 'expires' property here
            }}>
                {massageCatalog}
            </SessionProvider>
        </ReduxProvider>
        );

        await waitFor(() => {
            const massageItems = screen.queryAllByRole('img')
            expect(massageItems.length).toBe(5)
        })

    })
})