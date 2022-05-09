import React from 'react'
import Marquee from "react-fast-marquee";

const product = [
    "img/mochila.png",
    "img/stiker.png",
    "img/hoodie.png",
    "img/stiker_bocina.png",
];

const Login = () => {
    return (
        <main className='bg-zinc-800 h-screen w-screen flex flex-col justify-between'>
            {/* Text welcome and title */}
            <section className='flex items-center p-14'>
                <div>
                    <p className='text-zinc-400 text-xs font-medium text-center py-4'>Solution of searching product from 2000</p>
                    <p className='text-white font-bold text-3xl text-center'>All that you need, All that you want just here at all!</p>
                </div>
            </section>
            {/* END welcome and title*/}

            {/* carrousel imagenes*/}
            <section className='w-full h-40 flex items-center'>
                <div className='h-full'>
                    <Marquee className='h-full w-full flex-shrink-0' pauseOnHover speed={30} gradient={false}>
                        {product.map((obje, c) =>
                            <img key={c} src={obje}
                            className={`h-full w-full object-contain odd:scale-[0.85] ${c === 2 ? "-rotate-12" : "odd:rotate-12"}`} />)}
                    </Marquee>
                </div>
            </section>

            {/* END carrousel imagenes*/}

            {/*Buttons create account & sing in*/}
            <section className='p-6'>
                <div className='flex flex-col gap-3'>
                    <button className='bg-zinc-700 rounded-xl p-3  text-white font-semibold text-sm drop-shadow-2xl'>Create an account</button>
                    <a href='/home' className='bg-white rounded-xl p-3 text-zinc-600 font-bold text-sm text-center'>Sing in</a>
                    <p className='text-white/50 text-sm mt-2 mb-6'>
                        By proceding i accept the show shopping service and confirm that i have read Klarna's Privacy Policy Links in the app arte sposored
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Login