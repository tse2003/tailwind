import { MdWavingHand } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
export function Hero() {
    return <div className="flex">
        <div className="hero1">
            <h1 className="font-bold text-4xl ml-10 mt-10 flex gap-2">
                Hi, I'm Sagar
                <MdWavingHand />
            </h1>
            <p className="text-lg ml-10 text-gray-600">
                I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
                exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even
                though I have been creating web applications for over 7 years, I still love it 
            </p>
            <div className="flex ml-10 mt-5">
                <IoLocationOutline size={30} />
                <h3 className="mt-1 text-gray-600">Ahmedabad, India</h3>
            </div>
            <div className="flex ml-10 mt-2">
                <GoDotFill size={30} />
                <h3 className="mt-1 text-gray-600">Available for new projects</h3>
            </div>
            <div className="flex ml-10 mt-12 gap-3">
                <FiGithub size={30} />
                <FiTwitter size={30} />
                <FaFigma size={30} />
            </div>
        </div>
        <div className="hero2">
            <div className="photoback"></div>
            <img className="photo" src="Pic.png"/>
        </div>
    </div>;
}