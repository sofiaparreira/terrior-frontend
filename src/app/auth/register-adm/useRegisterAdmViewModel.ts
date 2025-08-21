import { IUserClient } from "@/types/IUserClient"
import { useEffect, useState } from "react"

export default function useRegisterAdmViewModel() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [user, setUser] = useState<IUserClient>({
        email: "",
        password: "",
        role: ""
    })

    const [isOpneModal, setIsOpenModal] = useState<boolean>(true);

    const toggleModal = () => setIsOpenModal(!isOpneModal)

 

    const handleRegister = async () => {
        try {
            
        } catch (error) {
            
        } finally {

        }
    }




    return {user, setUser, handleRegister, isOpneModal, toggleModal}
}