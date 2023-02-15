import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  MicrophoneIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const profilePic =
  "https://media.licdn.com/dms/image/D5603AQH8Abpyw7FZyQ/profile-displayphoto-shrink_400_400/0/1669689560477?e=1680739200&v=beta&t=_HpRj7b6X-7us9pQfLG2sdCXtZQRGx-6rKWCnVsDeiw";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term || term === router.query.term) return;

    console.log("push");
    router.push(`/search?term=${term}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="Logo"
        />
        <form
          className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5"
          onSubmit={search}>
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XMarkIcon
            className="h-7 text-gray-500 cursor-pointer icon__hover-effect sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-not-allowed" />
          <button type="submit">
            <MagnifyingGlassIcon className="h-6 text-blue-500 hidden sm:inline-flex icon__hover-effect" />
          </button>
        </form>
        <div className="ml-auto flex space-x-4 text-gray-700">
          <Squares2X2Icon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-not-allowed" />
          <Avatar url="../../avatar.jpeg" className="cursor-not-allowed" />
        </div>
      </div>

      <HeaderOptions />
    </header>
  );
}
export default Header;
