import TopMenu from "@/components/TopMenu";
import { render, screen } from "@testing-library/react"
import { Role } from "../interface";
import { SessionProvider } from "next-auth/react";

describe('Login', () => {

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

    it("Should be Welcome, Pongsaky", () => {
        render(
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
                <TopMenu/>
            </SessionProvider>
        );
        
        const welcome = screen.getByText("Welcome, Pongsaky");
        expect(welcome).toBeInTheDocument();
    })

})