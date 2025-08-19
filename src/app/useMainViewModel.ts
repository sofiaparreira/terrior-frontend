import { IWine } from "@/types/IWine"
import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export default function useMainViewModel() {

    const [wines, setWines] = useState<IWine[]>([]);

    const getWines = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/wine`);
            const data = response.data
            setWines(data)

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        getWines();
    }, [getWines])



    return { wines }
}