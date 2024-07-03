import { MdWavingHand } from "react-icons/md";
export function Hero() {
    return <div className="flex">
        <div className="hero1">
            <h1 className="font-bold text-4xl ml-10 mt-10 flex gap-2">
                Hi, I'm Sagar
                <MdWavingHand />
            </h1>
            <p>
                I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing)
                exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even
                though I have been creating web applications for over 7 years, I still love it 
            </p>
        </div>
        <div className="hero2"></div>
    </div>;
}