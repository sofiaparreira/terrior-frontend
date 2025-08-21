"use client"
import Button from '@/components/Button'
import CartCard from '@/components/CartCard'
import Navbar from '@/components/Navbar'
import React from 'react'
import useCartViewModel from './useCartViewModel'

const CartPage = () => {
        const {

    } = useCartViewModel();
    return (
        <>
            <Navbar />

            <main className='px-32 py-16'>
                <h1 className='text-xl font-bold mb-8'>Carrinho de Compras</h1>
                <div className="flex flex-col gap-4">
                    <CartCard name='name' quantity={1} url='/' />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        <span>Subtotal: </span>
                        <span>R$123</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Subtotal: </span>
                        <span>R$123</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span>Subtotal: </span>
                        <span>R$123</span>
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <Button text='Confirmar' />
                </div>
            </main>


        </>
    )
}

export default CartPage
