import { MdWavingHand } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";
export function Hero() {
  return (
    <div className="relative gap-4 md:flex md:flex-row-reverse">
      <div className="px-8 md:w-[320px]">
      <div className="order-2 bg-yellow-200 w-full aspect-[5/6] relative top-[10%] left-[10%]">
        <Image src="/images/profile.jpg" width={300} height={300} alt="Profile" className="block w-full h-full object-cover relative bottom-[10%] right-[10%]"/>
      </div>
      </div>

      <div className="flex-1 p-4 mt-16">
        <h1 className="font-bold text-4xl mt-10 flex gap-2">
          Hi, I'm Sagar
          <MdWavingHand className="text-yellow-500" />
        </h1>
        <p className="text-md items-center text-gray-600">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex mt-5 gap-1">
          <IoLocationOutline size={30} />
          <h3 className="mt-1 text-gray-600">Ahmedabad, India</h3>
        </div>
        <div className="flex mt-2 gap-2">
          <GoDotFill size={15} className="text-green-500 ml-2 mt-1" />
          <h3 className=" text-gray-600">Available for new projects</h3>
        </div>
        <div className="flex mt-12 gap-3">
          <FiGithub size={30} />
          <FiTwitter size={30} />
          <FaFigma size={30} />
        </div>
      </div>
      {/* <div className="hero2">
            <div className="photoback"></div>
            <img className="photo" src="Pic.png"/>
        </div> */}
    </div>
  );
}
