export function Skills() {
    return <div>
        <div className="text-center">
            <button class="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
                Skills
            </button>
            <p className="text-gray-600 mt-3">
                The skills, tools and technologies I am really good at:
            </p>
        </div>
        <div className="lg:flex gap-16">
            <div>
            <img className="ml-2" src="icon-postgresql.svg"/>
            <p className="text-gray-600">PostgreSQL</p>
            </div>
            <div>
            <img className="ml-2" src="icon-typescript.svg"/>
            <p className="text-gray-600">TypeScript</p>
            </div>
            <div>
                    <img className="ml-2" src="icon-react.svg"/>
                    <p className="text-gray-600">React</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-nextjs.svg"/>
                    <p className="text-gray-600">Next.js</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-nodejs.svg"/>
                    <p className="text-gray-600">Node.js</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-express.svg"/>
                    <p className="text-gray-600">Express.js</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-nest.svg"/>
                    <p className="text-gray-600 ml-3">Nest.js</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-socket.svg"/>
                    <p className="text-gray-600">Socket.io</p>
                </div>

        </div>
    </div>;
    
}