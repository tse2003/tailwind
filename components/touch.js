import { HiOutlineMail } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
export function Touch() {
    return <div>
        <div className="text-center">
            <button class="bg-gray-200 text-gray-600 py-2 px-4 rounded-full mt-14">
            Get in touch
            </button>
            <p className="text-sm mt-2 text-gray-600">
                What's nest? Feel free to reach out to me if you're looking for
            </p>
            <p className="text-sm text-gray-600">
                a developer, have a query, or simply want to connect.
            </p>
        </div>
        <div className="contact">
            <div className="justify-center flex gap-3 mt-12">
                <HiOutlineMail size={30} />
                <p className="font-bold text-lg">reachsagarshah@gmail.com</p>
                <IoCopyOutline size={30} />
            </div>
            <div className="justify-center flex gap-3">
                <CiPhone size={30} />
                <p className="font-bold text-lg">+91 8980500565</p>
                <IoCopyOutline size={30} />
            </div>
            <div className="text-center mt-14">
                <p className="text-gray-600">You may also find me on these platforms!</p>
            </div>
            <div className="flex gap-3 items-center justify-center mt-2">
                <FiGithub size={30} />
                <FiTwitter size={30} />
                <FaFigma size={30} />
            </div>
            <div className="bg-gray-50 mt-20">
                <div className="flex gap-1 justify-center p-3">
                    <FaRegCopyright size={15} className="mt-1" />
                    <p className="text-gray-600 text-sm">2023 |</p>
                    <p className="text-gray-600 text-sm underline decoration-solid">Designed</p>
                    <p className="text-gray-600 text-sm">and</p>
                    <p className="text-gray-600 text-sm underline decoration-solid">coded</p>
                    <p className="text-gray-600 text-sm">with</p>
                    <FaHeart className="mt-1 text-red-500" />
                    <p className="text-gray-600 text-sm">by Sagar Shah</p>
                </div>
            </div>
        </div>

        
    </div>;
}