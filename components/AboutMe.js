export function AboutMe() {
    return <div className="lg:bg-gray-50 mt-5">
        <div className="text-center bg-gray-50">
            <button class="bg-gray-200 text-black py-2 px-4 rounded-full mt-14 mb-10">
                About Me
            </button>
        </div>
        <div className="lg:flex bg-gray-50">
            <div className="w-[100%]">
                <div className="order-2 relative">
                    {/* <div className="bg-black h-10 absolute right-0 top-0 w-10"></div> */}
                    <img className="w-72 ml-14 relative" src="Pic2.png" />
                </div>
            </div>
            <div className="w-[100%] ">
                <h1 className="text-2xl font-bold mt-7">
                    Curious about me? Here you have it:
                </h1>
                <p className="text-gray-600 mt-5">
                    I'm a passionate, <a className="underline">self-proclaimed designer</a> who 
                    specializes in full stack development (React.js & Node.js). I am very 
                    enthusiastic about bringing the technical and visual aspects of digital 
                    products to life. User experience, pixel perfect desgn, and writing, 
                    readable, highly performant code matters to me.
                </p>
                <p className="text-gray-600 mt-5">
                    I began my journey as a web developer in 2015, and since then, I've
                    continued to grow and evolve as a developer, taking on new challeges and
                    learning the latest technologies along the way. Now, in my early thirties, 
                    7 years after starting my web development journey. I'm building cutting-edge 
                    web applications using modern technologies such as Next.js, TypeScript, 
                    Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p  className="text-gray-600 mt-5">
                    I am very much a progressive and enjoy working on products end to end, 
                    from ideation all the way to development.
                </p>
                <p className="text-gray-600 mt-5">
                    When I'm not in the full-on developer mode, you twitter or on indie hacker, 
                    witnessing the journey of early startups or enjoyoing some free time. You 
                    can follow me on <a className="underline">Twitter </a> where I share 
                    techraleted bites and build in public, or you can follow me on <a className="underline">GitHub</a>.
                </p>
                <p className="text-gray-600 mt-5">
                    Finally, some quick bits about me.
                </p>
                <div className="flex ml-10 gap-20 mt-5 text-gray-600">
                    <ul className="list-disc">
                        <li>B.E in Computer Engineering</li>
                        <li>Full time freelancer</li>
                    </ul>
                    <ul className="list-disc">
                        <li>Avid learner</li>
                        <li>Aspiring indie hacker</li>
                    </ul>
                </div>
                <p className="text-gray-600 mt-5 mb-5">
                    One last thing, I'm available for freelance work, so 
                    feel free to reach out and say hello! I promise 
                    I don't bite
                </p>
            </div>
        </div>
    </div>;
    
}