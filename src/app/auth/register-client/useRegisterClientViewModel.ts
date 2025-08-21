import { IUserClient } from "@/types/IUserClient"
import { useState } from "react"

export default function useRegisterClientViewModel() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUserClient>({
        email: "",
        password: "",
        role: ""
    })

    const handleRegister = async () => {
        try {
            
        } catch (error) {
            
        } finally {

        }
    }




    return {user, setUser, handleRegister}
}