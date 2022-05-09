import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


const description = [
    "img/nike.png",
    "img/nike_2.png",
    "img/nike_3.png",
    "img/nike_4.png",
    "img/nike_5.png",
    "img/nike_6.png"
];

function Product() {
    const [active, setActive] = useState(description[0]);
    let navigate = useNavigate();

    return (
        /* detail product */

        <main className="bg-zinc-200 h-screen w-screen">
            <section className=" flex flex-col p-5">
                <div className="flex justify-between items-center">
                    <IoIosArrowRoundBack onClick={() => navigate(-1)}
                        className="text-2xl text-zinc-600 font-bold cursor-pointer" />
                    <p className="font-medium text-zinc-600">Detail Product</p>
                    <AiFillHeart className="text-xl text-red-600" />
                </div>

                {/* end detail product */}

                {/* image product */}

                <div className="px-12 flex items-center w-full aspect-square overflow-hidden">
                    <img src={active} alt="img product" />
                </div>

                {/* END image product */}
            </section >

            {/* text title product & price*/}
            <section className="bg-white pt-6 pb-40 px-5 rounded-2xl drop-shadow-xl">
                <div>
                    <div className="flex justify-between">
                        <p className="font-medium text-lg text-zinc-700 w-2/3 leading-5">Nike Zoom Separate PF- Basketball Shoes</p>
                        <span className="bg-orange-500 rounded-md text-white w-16 h-8 text-center">$18.50</span>
                    </div>
                    {/* END text title product & price*/}

                    {/* description product*/}
                    <div className="py-6">
                        <p className="text-xs font-medium text-zinc-500">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley
                        </p>
                    </div>
                </div>
                {/* END description product*/}

                {/* carrousell products*/}
                <div flex className="flex gap-3 overflow-x-scroll no-scroll items-center">
                    {description.map((obj, b) =>
                        <div key={b} onClick={() => setActive(obj)}
                            className={`flex flex-shrink-0 items-center w-20 h-20 rounded-xl py-5 px-1 transition-colors duration-500  ${active === obj ? "bg-zinc-500" : "bg-zinc-100"}`}>
                            <img src={obj} alt="img carrousell" />
                        </div>
                    )}
                </div>
                <div class="py-6 border-b-2 border-zinc-200"></div>
                {/* END carrousell products*/}



            </section>
            {/* MENU*/}
            <section className="bg-white fixed bottom-0 w-full py-4 px-4 rounded-t-3xl shadow-2xl">
                <div>
                    <div className="flex justify-between">
                        <div className="bg-zinc-200 flex justify-between w-1/4 rounded-full items-center p-2">
                            <button className="bg-zinc-900 rounded-full h-7 w-7 text-white font-bold">-</button>
                            <p>0</p>
                            <button className="bg-zinc-900 rounded-full h-7 w-7 text-white font-bold">+</button>
                        </div>

                        <div>
                            <button className="bg-zinc-900 rounded-md text-white text-xs py-3 px-16" >Add to Cart</button>
                        </div>

                    </div>

                </div>
            </section>
        </main>

    );
}

export default Product;
