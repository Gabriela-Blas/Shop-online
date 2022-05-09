// icons
import { FiSearch } from "react-icons/fi";
import { SiVisa } from "react-icons/si";
import { IoShirtOutline } from "react-icons/io5";
import { GiFlexibleLamp, GiKnifeFork, GiConverseShoe } from "react-icons/gi";
import { AiOutlineHeart, AiOutlineHome, AiOutlineAppstore, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag, BiUserCircle } from "react-icons/bi";

//react

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        icon: <IoShirtOutline />,
        name: "Best Deal"
    },
    {
        icon: <GiFlexibleLamp />,
        name: "Furnature"
    },
    {
        icon: <GiKnifeFork />,
        name: "Forky"
    },
    {
        icon: <GiConverseShoe />,
        name: "Converse"
    },

];

let initProducts = [
    {
        img: "img/bocina.png",
        name: "Bocina Sony",
        price: 55.62,
        liked: true,
    },
    {
        img: "img/nike.png",
        name: "Nike separate PF",
        price: 25.62,
        liked: false,
    },
]

function Home() {
    const [active, setActive] = useState(categories[0].name);
    const [products, setProducts] = useState(initProducts);
    let navigate = useNavigate();


    function likeHandler(index) {
        let aux = products;
        aux[index].liked = !aux[index].liked;

        setProducts(() => [...aux]);
    }

    function goToProduct() {
        navigate("/Product")
    }
    return (
        <>
            <main className="h-screen w-screen bg-zinc-200 px-6 py-8 flex flex-col gap-8 overflow-y-scroll no-scroll">
                <section className="flex flex-col gap-5">
                    {/* Searchbox */}
                    <div className="relative flex items-center">
                        <input type="text" className="w-full px-3 py-2.5 rounded-xl text-sm font-medium focus:outline-none"
                            placeholder="Search here..." />
                        <FiSearch className="absolute right-3 text-xl text-zinc-600" />
                    </div>
                    {/* END: Searchbox */}

                    {/* Credit Card */}
                    <div className="bg-zinc-900 text-white py-4 px-3 rounded-xl flex flex-col gap-3 drop-shadow-xl">
                        <div className="flex justify-between items-center">
                            <p className="opacity-70 text-sm">Balance</p>
                            <SiVisa className="text-3xl" />
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold opacity-90">$280.65</p>
                            <span className="opacity-70 text-sm">**** 3028</span>
                        </div>
                    </div>
                    {/* END: Credit Card */}

                    {/* Categories */}
                    <div className="flex gap-3 overflow-x-scroll no-scroll">
                        {categories.map((element, i) =>
                            <div key={i} onClick={() => setActive(element.name)}
                                className={`py-2 px-1 flex flex-shrink-0 flex-col h-20 w-16 rounded-xl items-center justify-center gap-3 transition-colors duration-300 ${active === element.name ? "bg-blue-400 text-white" : "bg-white"}`}>
                                <i className="text-xl">
                                    {element.icon}
                                </i>
                                <p className="text-xs">{element.name}</p>
                            </div>
                        )}
                    </div>
                    {/* END: Categories */}
                </section>

                <section className="flex flex-col gap-4 pb-14">
                    {/* products */}
                    <div className="flex gap-3">
                        {products.map((product, a) =>
                            <div key={a} className="relative w-1/2 flex flex-col items-center gap-2">
                                <div onClick={() => goToProduct()} className="bg-white drop-shadow-md rounded-md w-full h-full aspect-square flex justify-center items-center p-2">
                                    <span className="bg-orange-600 rounded-md absolute top-2 right-2 p-1 text-[10px] text-white">{product.price}</span>
                                    <img src={product.img} alt="product img" />
                                </div>
                                <div className="flex w-full justify-between items-center gap-1">
                                    <p className="text-[10px] font-medium leading-3">
                                        {product.name}
                                    </p>
                                    <div onClick={() => likeHandler(a)}>
                                        {product.liked ? <AiFillHeart className="text-xl text-red-500" /> :
                                            <AiOutlineHeart className="text-xl" />}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* END products */}

                    {/* banner */}
                    <div className="flex items-center rounded-xl overflow-hidden h-32 relative drop-shadow-lg">
                        <div className="z-10 p-5 text-zinc-700">
                            <span className="text-[10px] font-medium">Next cameras</span>
                            <p className="font-bold w-2/3 leading-5">Know whats happening 24/7</p>
                        </div>
                        <img src="img/lampara.jpg" alt="banner img" className="absolute z-0" />
                    </div>
                </section>

                <section className="bg-white h-14 w-full fixed left-0 bottom-0 rounded-t-3xl flex justify-around items-center">
                    {/* Menu */}

                    <AiOutlineHome className="text-2xl text-zinc-400" />
                    <AiOutlineAppstore className="text-2xl text-zinc-400" />
                    <BiShoppingBag className="text-2xl text-zinc-400" />
                    <BiUserCircle className="text-2xl text-zinc-400" />
                </section>
            </main>
        </>
    );
}

export default Home;
