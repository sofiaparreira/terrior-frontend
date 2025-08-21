"use client"

import Button from '@/components/Button'
import InputGroup from '@/components/input/InputGroup'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useLoginViewModel from './useLoginViewModel'

const LoginPage = () => {

    const {
        user, setUser
    } = useLoginViewModel();
    return (
        <>

            <main className='grid grid-cols-2 gap-16 items-center h-screen'>

                <Image src={''} alt='' width={1000} height={1000} />
                <section className='flex flex-col w-full px-16'>
                    <div className='mb-16'>
                        <h1 className='text-xl font-semibold'>Faça login</h1>
                        <p className='text-sm text-gray-600'>Entre na sua conta e aproveite as novidades</p>
                    </div>
                    <form className='' action="">
                        <div className='flex gap-4'>
                            <button></button>
                        </div>
                        <div className="space-y-2 mb-8">
                            <InputGroup
                                label='E-mail'
                                onChange={(e) => {
                                    setUser((prev) => ({
                                        ...prev,
                                        email: e.target.value
                                    }))
                                }} />
                            <InputGroup
                                label='Senha'
                                isPassword={true}
                                onChange={(e) => {
                                    setUser((prev) => ({
                                        ...prev,
                                        password: e.target.value
                                    }))
                                }} />
                        </div>
                        <Button
                            type='submit'
                            text='Cadastrar'
                        />

                        <Link href={'/auth/register-adm'} className="flex justify-center gap-1 text-sm mt-16 bg-gray-100 rounded-full py-3 px-8 w-fit mx-auto font-medium cursor-pointer">
                            Criar conta de cliente
                        </Link>
                    </form>
                </section>
            </main>


        </>
    )
}

export default LoginPage
