"use client"

import Button from '@/components/Button'
import InputGroup from '@/components/input/InputGroup'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useRegisterAdmViewModel from './useRegisterAdmViewModel'

const RegisterClient = () => {

    const {
        user, setUser, handleRegister, isOpneModal, toggleModal
    } = useRegisterAdmViewModel();
    return (
        <>
        
      
        <main className='grid grid-cols-2 gap-16 items-center h-screen'>

            <Image src={''} alt='' width={1000} height={1000} />
            <section className='flex flex-col w-full px-16'>
                <div className='mb-16'>
                    <h1 className='text-xl font-semibold'>Crie sua conta</h1>
                    <p className='text-sm text-gray-600'>Crie sua conta como cliente e aproveite sua compra!</p>
                </div>
                <form className='' action="">
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
                        onClick={handleRegister} />

                    <Link href={'/auth/register-adm'} className="flex justify-center gap-1 text-sm mt-16 bg-gray-100 rounded-full py-3 px-8 w-fit mx-auto font-medium cursor-pointer">
                        Criar conta de cliente
                    </Link>
                </form>
            </section>
        </main>

        {isOpneModal && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
          
          {/* Dialog Container */}
          <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            {/* Dialog Panel */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* Dialog Content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Warning Icon */}
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      aria-hidden="true" 
                      className="size-6 text-red-600"
                    >
                      <path 
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                  
                  {/* Dialog Text */}
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold text-gray-900">
                      Aviso
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        A página de registro de adminstrador só está disponível para vocês testarem o projeto, caso contrário, não deixaria um usuário comum registar como administrador da loja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Dialog Actions */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button 
                  type="button" 
                  onClick={toggleModal}
                  className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer sm:ml-3 sm:w-auto"
                >
                  OK
                </button>
                
              </div>
            </div>
          </div>
        </div>
        )}
          </>
    )
}

export default RegisterClient
