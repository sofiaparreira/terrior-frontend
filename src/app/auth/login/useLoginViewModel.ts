import { IUserClient } from "@/types/IUserClient";
import axios from "axios";
import { useState } from "react";

export default function useLoginViewModel() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUserClient>({
        email: "",
        password: "",
        role: ""
    })

    const handleLogin = async () => {
        try {
            const response = axios.post(`${process.env.NEXT_PUBLIC_API_URL}`, {
                user
            })
        } catch (error) {
            
        } finally {

        }
    }

    return {setUser, user}
}