import { MdWavingHand } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
export function Hero() {
  return (
    <div className="lg:flex">
      <div className="order-2 relative">
       
        {/* <div className="bg-black absolute object-contain w-[200px] h-[250px] mt-16 ml-36"></div> */}
        <img className="w-60 ml-20 mt-5 relative" src="Pic.png" />
      </div>

      <div className="order-1 md:w-[800px]">
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
