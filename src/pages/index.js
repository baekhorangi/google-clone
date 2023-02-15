import Avatar from "@/components/Avatar";
import Head from "next/head";
import Image from "next/image";
import { MicrophoneIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Search Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-not-allowed" />

          <Avatar url="../../avatar.jpeg" className="cursor-not-allowed" />
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          height={10}
          width={200}
          alt="Logo"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition-all duration-300 ease-linear">
          <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 text-gray-500 icon__hover-effect cursor-not-allowed" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
