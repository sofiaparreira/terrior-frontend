import Image from 'next/image';
import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi';

interface CartCardProp {
    url: string;
    name: string;
    quantity: number;
}

const CartCard:React.FC<CartCardProp> = ({name, quantity, url}) => {


  return (
    <div className='flex justify-between'>

        <div className='flex gap-4 items-center'>
            <Image src={url} alt='' width={50} height={50}/>
            <div className='flex flex-col gap-2'>
                <h2>{name}</h2>
                <span>detail</span>
            </div>
        </div>

        <div className='flex gap-3 items-center'>
            <button className='flex justify-center items-center p-2 bg-gray-100 text-gray-800 rounded-full'>
                <FiPlus className='text-xs' />
            </button>

            <span>
                {quantity}
            </span>

            <button className='flex justify-center items-center p-2 bg-gray-100 text-gray-800 rounded-full'>
                <FiMinus className='text-sm' />
            </button>
        </div>
      
    </div>
  )
}

export default CartCard
