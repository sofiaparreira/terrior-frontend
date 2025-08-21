import ProductCard from "@/components/ProductCard";
import { IWine } from "@/types/IWine"
import axios from "axios";
import { useCallback, useEffect, useState } from "react"

export default function useCartViewModel () {
    
    const [wines, setWines] = useState<IWine[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getProductsCart = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cart`);
            const data = (await response).data
            console.log('cart get', data);
        } catch (error) {
            
        } finally {
            setIsLoading(false)
        }
    },[])

    useEffect(() => {
        getProductsCart()
    },[ProductCard])

    return {}
}