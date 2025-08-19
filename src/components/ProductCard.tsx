import Image from 'next/image'
import React from 'react'

interface cardProps {
    src: string;
    name: string;

}

const ProductCard:React.FC<cardProps> = ({name, src}) => {
  return (
<div className='bg-white shadow-lg shadow-gray-100 p-4'>
  {src ? (
    <Image src={src} alt='Wine image' width={300} height={300} />
  ) : null}
  <h2>{name}</h2>
</div>

  )
}

export default ProductCard
