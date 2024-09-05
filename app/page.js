"use client"

// client component
import { useState } from "react";
import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  // No weights specified
});

export default function Home() {

const [toggle, setToggle] = useState(false);

const handleToggle = () => {
  setToggle(!toggle)
}

  return (
    <main>
      <div className="curved-background">
        <header className="flex justify-between items-center md:mx-8 mx-2 py-2">
          <div className="text-xs">
            <ul className="nav-list">
              <li
                className={`${rubik.className} text-lg font-extrabold text-white`}
              >
                <Image
                  src="/Lew.png"
                  alt="Vercel Logo"
                  width={60}
                  height={24}
                  priority
                />

                
              </li>
              
              <div className={toggle ? "block" : "hidden" }>
                
              <span className={`flex flex-col py-4 absolute left-0 top-10 bg-white w-full font-semibold text-base cursor-pointer rounded duration-300`}>
              {/* <div className={toggle ? "block" : "hidden"}>
              <div className="w-6 h-1 bg-black"></div>
              <div className="w-6 h-1 bg-black"></div>
                </div> */}
              <a href="#delicacies"><li className={` hover:bg-orange-400 hover:text-white py-2 px-2 m-1`}>
                  DELICACIES 
                  </li></a>
                  <a href="#about"><li className="hover:bg-orange-400 hover:text-white py-2 px-2 m-1">
                  ABOUT 
                  </li></a>
                  <a href="#delicacies"><li className="hover:bg-orange-400 hover:text-white py-2 px-2 m-1">
                  FIND YOUR WAY 
                  </li></a>
              </span>
              </div>
            </ul>
          </div>

          <div className="flex">
            <div className="text-white mx-6">+27 72 806 2108</div>
            <div className="space-y-1 ml-auto" onClick={handleToggle}>
            <div
        className={`w-6 h-1 bg-white transition-transform duration-300 ${toggle ? 'transform rotate-45 translate-y-2' : ''}`}
      ></div>
      <div
        className={`w-6 h-1 bg-white transition-opacity duration-300 ${toggle ? 'opacity-0' : ''}`}
      ></div>
      <div
        className={`w-6 h-1 bg-white transition-transform duration-300 ${toggle ? 'transform -rotate-45 -translate-y-2' : ''}`}
      ></div>
            </div>
          </div>
        </header>

        <section>
          <div className="hero">
            <div className="md:flex md:justify-between md:items-center md:px-36 py-8">
              <div>
                <div className=" px-6 text-3xl md:text-5xl font-bold text-white md:ml-1 md:mb-9 mb-4 mt-20 font-serif ">
                  An Ambient Dining Experience
                </div>

                <div className="pb-3 pl-6 md:ml-1 text-slate-50 font-serif font-medium">
                Welcome to Lowcost Foods, where culinary creativity meets authentic flavors. Nestled in the heart of Newtown Johannesburg, we offer a unique dining experience that tantalizes the senses.
                </div>

                <button className="bg-orange-400 md:block text-white px-6 py-3 mx-7 md:ml-3 md:mb-16 font-bold rounded-full">
                  Order
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="py-4 my-12" id="delicacies">
        <div className="flex items-center justify-between">
          <div>
            <span className="w-1 h-1 p-1 mr-2 bg-black "></span>
            <span className="font-extrabold opacity-70 text-green-950">
              FEATURED FOODS
            </span>
          </div>
          <div>
            <Image
              src="/Blueberry.svg"
              alt="blueberry.svg"
              width={100}
              height={24}
            />
          </div>
        </div>
      </main>

      <main>
        <div className="mb-5 mx-2">
          <div className="m-10">
            <Image
              src="/barbtwo.jpg"
              alt="Vercel Logo"
              width={300}
              height={234}
              priority
            />
          </div>

          <div className="space-y-12">
            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
                R20
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">
                Rice, Beans, Spaghetti
              </p>
              <p className="text-slate-600">
                {" "}
                A satisfying mix of staples, featuring fluffy rice, hearty beans, and perfectly cooked spaghetti.{" "}
              </p>
            </div>

            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
                R50 R25 R10 R5
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">
                Chicken, Beef, Goat Meat, Cow Heels
              </p>
              <p className="text-slate-600">
                {" "}
                A selection of tender meats, including succulent chicken, flavorful beef, and rich goat meat, paired with traditional cow heels.{" "}
              </p>
            </div>

            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
                R50 R30 R20 R10 R3 
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">
                Turkey, Fish, Skin, Okpa
              </p>
              <p className="text-slate-600">
                {" "}
                Enjoy a mix of savory turkey, fresh fish, crispy skin, and a traditional serving of Okpa, a beloved delicacy.{" "}
              </p>
            </div>
          </div>

          <div className="m-10">
            <Image
              src="/download.png"
              alt="Vercel Logo"
              width={300}
              height={234}
              priority
            />
          </div>

          <div className="space-y-12">
            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
                R30 R20
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">
                Soup, Pounded Yam, Amala, Wheat
              </p>
              <p className="text-slate-600">
                {" "}
                Savor our rich, flavorful soups paired with your choice of pounded yam, soft amala, or wholesome wheat.{" "}
              </p>
            </div>

            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
              R20 R10
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">Pap, Oat Pap</p>
              <p className="text-slate-600">
                {" "}
                Enjoy the smooth and creamy texture of traditional pap or oat pap, perfect for a light and satisfying meal.{" "}
              </p>
            </div>

            <div>
              <p className="decoration-dotted flex justify-end m-2 text-2xl font-mono">
                R50 R20
              </p>{" "}
              <hr className="h-0.5 bg-black" />
              <p className="font-medium text-3xl my-2">
                Fiofio/Achicha, Ugba, Garri
              </p>
              <p className="text-slate-600">
                {" "}
                Delight in the hearty combination of fiofio or achicha, accompanied by the unique taste of ugba and crispy garri.{" "}
              </p>
            </div>
          </div>
        </div>
      </main>

      <main>
        <div className="mid-section bg-orange-100 pt-14 my-10">
          <div className="bg-whitee pt-12 mx-3 md:mx-40 lg:mx-80 lg:px-20">
            <div className="mb-6">
              <div className="font-extrabold text-center text-white">
                LowCost Foods
              </div>
              <div className="text-xs text-center text-orange-100">
              Best prices for quality meals
              </div>
            </div>

            <div className="text-center font-semibold mb-10 text-orange-100">
            Discover delicious meals at unbeatable prices. Quality food that fits your budget.{" "}
            </div>

            <button className="bg-orange-400 text-white flex justify-center items-center px-6 py-3 mx-7 md:ml-44 mb-6 font-bold rounded-full">
              Order
            </button>
          </div>
        </div>
      </main>

      <section id="contacts">
        <div className="bg-neutral-800 mx-1 px-3 rounded-se-2xl rounded-ss-2xl" id="about">
          <div className="md:flex md:justify-center md:items-start md:gap-6 md:mx-5">
            <div className="mb-20 md:mt-24">
              <div className="text-center md:text-left text-orange-100 font-extrabold text-xl pt-4">
                <div>LOWCOST FOODS</div>
              </div>
              <div className="mt-4">
                <p className="text-sm md:text-base mb-3 text-white">
                  Nourishing lives with quality food and delivering trusted,
                  flavorful experiences.
                </p>
                <p className="text-orange-400 text-lg font-medium mb-3">
                  Our Mission: Quality Nourishment for All.
                </p>
                <p className="text-sm font-medium mb-2 text-white">
                  <i className="fas fa-headset"></i> SPEAK TO US AT
                </p>
                <div className="text-sm font-medium text-white">
                  <a href="tel:+27747812950">+27 74 781 2950</a>
                  <p>
                     <a href="tel:+27728062108"></a> +27 72 806 2108</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="mb-20 md:mt-32">
              <p className="text-sm font-semibold mb-3 text-orange-400">
                CONTACTS
              </p>
              <p className="text-sm font-semibold text-white mb-3">
                BREE METRO MALL 171A, BREE & SAUER STREET, BY BREE TAXI RANK,
                NEWTOWN JOHANNESBURG.
              </p>

              <hr />
            </div>

            <div className="mb-16 md:mx-8 md:mt-32">
              <p className="text-sm font-semibold mb-5 text-orange-400">
                COMPANY
              </p>
              <ul className="space-y-3 text-white">
                <li className="text-white text-base">
                  <a href="#">Home</a>
                </li>
                <li className="text-white text-base">
                  <a href="#contacts">Contact Us</a>
                </li>
                <li className="text-white text-base">
                  <a href="#">About Us</a>
                </li>
              </ul>
              <hr />
            </div>

            <div className="mb-12 md:mt-32">
              <p className="text-sm font-semibold mb-5 text-orange-400">
                SUPPORT
              </p>
              <p className="text-sm md:text-base mb-4 text-white">
                If you have an enquiry of any sorts, please send us an email
              </p>
              <p className="text-sm md:text-base text-orange-400 mb-4 ">
                <a href="mailto:dbenestate@gmail.com"> lowcost@gmail.com </a>
              </p>
              <hr />
            </div>
          </div>

          <div className="pb-12 text-center md:text-left flex justify-center items-center">
            <p className="text-sm text-neutral-300">
              Copyright © 2024 LOWCOST FOODS LTD. Designed & Developed by{" "}
              <a
                href="https://isaacwinner.vercel.app"
                className="text-orange-400 hover:underline"
              >
                {" "}
                Isaac Winner.
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
