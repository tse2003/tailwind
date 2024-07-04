import { MdWavingHand } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
export function AboutMe() {
    return <div className="bg-gray-50">
        <div className="button">
        <button class="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
            About Me
        </button>
        </div>
        <div className="flex">
        <div className="about2">
            <div className="photoback2"></div>
            <img className="photo2" src="Pic2.png"/>
        </div>
        <div className="about1">
            <h1 className="font-bold text-2xl ml-10 mt-10 flex gap-2">
                Curious about me? Here you have it:
            </h1>
            <p className="text-sm ml-10 text-gray-600">
                I'm a passionate, <a className="underline">self-proclaimed designer</a>  who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-sm ml-10 mt-4 text-gray-600">
                I began my journey as a web developee in 2015, and since then, I've conitinued to grow
                and evolve as a developer, taking on new challenges and learning the latest technologies
                along the way. Now, in my earlt thirties, 7 years after starting my web development journey,
                I'm building cutting-edge web applications using technologies such as Next.js, TypyScript,
                Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-sm ml-10 mt-4 text-gray-600">
                I am very much a progressive thinker and enjoy working on products end to end, from ideation
                all theway to development.
            </p>
            <p className="text-sm ml-10 mt-4 text-gray-600">
                When I'm not in full developer mode, you can find me hovering around on twitter or on indie hacker,
                witnessing the journey of early startups or enjoying somenfree time. You can follow me on <a className="underline">Twitter</a> where 
                I share techlated bites and build in public, or you can follow me on <a className="underline">GitHub</a>.
            </p>
            <p className="text-sm ml-10 mt-4 text-gray-600">
                Finally, some quick bits about me.
            </p>
            <div className="flex gap-16 ml-14 mt-4 text-gray-600">
                <div>
                    <ul className="list">
                        <li>B.E. in Computer Engineering</li>
                        <li>Full time freelancer</li>
                    </ul>
                </div>
                <div>
                    <ul className="list">
                        <li>Avid learner</li>
                        <li>Aspring indie hacker</li>
                    </ul>
                </div>
            </div>
            <p className="text-sm ml-10 mt-4 text-gray-600">
                One last thing, I'm available for freelance work, so feel 
                free to reach out and say hello! I promise I don't bite
            </p>
        </div>
        
    </div>
    </div>;
    
}