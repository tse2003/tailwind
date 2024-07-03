import { FiSun } from "react-icons/fi";
export function Header() {
    return (
        <div className="flex justify-between">
            <div className="h-10"><img src="SS.png"/></div>
            <div className="flex justify-between gap-4">
                <div className="lg:flex hidden gap-5">
                    <button>About</button>
                    <button>Work</button>
                    <button>Testimonials</button>
                    <button>Contact</button>
                </div>
                <div className="hidden lg:block mt-3">
                    <FiSun />
                </div>
                <div className="hidden lg:block">
                    <button class="bg-black hover:bg-black text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Download CV
                    </button>
                </div>
                <div className="lg:hidden">Mobile Menu</div>
            </div>
        </div>
    );
}