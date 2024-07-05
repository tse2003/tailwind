export function Skills() {
    return <div className="Skills">
        <div className="button">
            <button class="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
                Skills
            </button>
            <p className="text-sm mt-2 text-gray-600">
                The skills, tools and technologies I am really good at:
            </p>
        </div>
        <div className="ml-14">
            <div className="flex text-center ml-14 mt-6 gap-14">
                <div>
                    <img className="ml-2" src="icon-javscript.png"/>
                    <p className="text-gray-600">Javascript</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-typescript.svg"/>
                    <p className="text-gray-600">Typescript</p>
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
        </div>
        <div className="ml-14">
            <div className="flex text-center ml-14 mt-6 gap-14">
                <div>
                    <img className="ml-2" src="icon-postgresql.svg"/>
                    <p className="text-gray-600">PostgreSQL</p>
                </div>
                <div>
                    <img className="ml-6" src="icon-mongodb.svg"/>
                    <p className="text-gray-600">MongoDB</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-sass.svg"/>
                    <p className="text-gray-600">Sass/Scss</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-tailwindcss.svg"/>
                    <p className="text-gray-600">Tailwindcss</p>
                </div>
                <div>
                    <img className="ml-2" src="icon-figma.svg"/>
                    <p className="text-gray-600">Figma</p>
                </div>
                <div>
                    <img src="icon-cypress.svg"/>
                    <p className="text-gray-600">Cypress</p>
                </div>
                <div>
                    <img className="ml-1" src="icon-storybook.svg"/>
                    <p className="text-gray-600">Storybook</p>
                </div>
                <div>
                    <img src="icon-git.svg"/>
                    <p className="text-gray-600">Git</p>
                </div>
            </div>
        </div>
    </div>;
}