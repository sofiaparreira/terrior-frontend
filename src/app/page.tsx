"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaLock, FaLongArrowAltRight, FaTruck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import useMainViewModel from "./useMainViewModel";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { MdArrowRightAlt } from "react-icons/md";

export default function Home() {

  const {
    wines
  } = useMainViewModel();
  return (
    <>
    <Navbar />
      <main>
        <section className="w-full h-96 bg-[url('/imagem-banner.jpg')] bg-cover bg-center relative">

          <div className="absolute inset-0 bg-black/50"></div>

          {/* Conteúdo por cima */}
          <div className="relative z-10 flex items-center justify-end h-full text-white">
            <div className="w-1/3 flex flex-col items-center pr-64">
              <h1 className="text-5xl font-libre-caslon tracking-wide text-center">TERRIOR</h1>
              <h2 className="mb-16 font-libre-caslon text-center">A melhor casa de vinhos</h2>
              <button className="relative overflow-hidden border border-gray-100 py-2 px-8 cursor-pointer flex gap-3 items-center justify-center group text-white hover:text-primary">
                <span className="relative z-10 flex items-center gap-3">
                  Ver vinhos
                  <MdArrowRightAlt className="group-hover:translate-x-2 duration-300 transition-all text-lg" />
                </span>
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-all duration-300 ease-out"></span>
              </button>

            </div>
          </div>
        </section>

        <section className="px-48 py-8 space-y-16 justify-center flex flex-col items-center">
          <div className="bg-[#F1F7ED] px-8 py-6 grid grid-cols-4 text-primary w-full">
              <span className="flex flex-col gap-2 justify-center items-center">
                <FaTruck className="text-3xl" />
                <p className="text-sm font-medium">Frete Grátis</p>
              </span>

              <span className="flex flex-col gap-2 justify-center items-center">
                <FaLocationDot className="text-3xl" />
                <p className="text-sm font-medium">Envio para todo o brasil</p>
              </span>


              <span className="flex flex-col gap-2 justify-center items-center">
                <FaTruck className="text-3xl" />
                <p className="text-sm font-medium">Em até 6x sem juros</p>
              </span>


              <span className="flex flex-col gap-2 justify-center items-center">
                <FaLock className="text-3xl" />
                <p className="text-sm font-medium">100% seguro</p>
              </span>
          </div>


          <div className="grid grid-cols-4 gap-8 w-full">
            {wines.map((wine, key) => (
              <ProductCard
                key={key} 
                name={wine.name}
                src={wine.imageUrl}
                />
            ))}
          </div>

          <Button text="Ver todos" icon={<MdArrowRightAlt className="text-lg" />} className="w-fit" />
        </section>


        <section className="bg-secondary px-48 py-16 my-16">
          <h1 className="font-libre-caslon text-xl text-white text-center">Vinhos para ocasiões certas</h1>

          <div className="grid grid-cols-3 gap-8">

          </div>
        </section>

        <section className="px-48 py-8 flex flex-col justify-center items-center gap-8">
          <Image src={'/logo-icon.svg'} alt="Icon terrior" width={48} height={48} />
          <p className="text-justify">Quando o assunto é vinho, não aceite menos do que a excelência. Venha visitar a Terroir e descubra por si mesmo a paixão que nos move a buscar o melhor dos melhores. Explore, deguste e sinta a riqueza de aromas e sabores que nossos vinhos têm a oferecer. Seja um amante do vinho ou um curioso entusiasta, todos são bem-vindos em nossa loja.</p>
        </section>


      </main>
    </>
  );
}
