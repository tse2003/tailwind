import React from 'react';

export function Skills() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <button className="bg-gray-200 text-black py-2 px-4 rounded-full mt-7">
                    Skills
                </button>
                <p className="text-gray-600 mt-3">
                    The skills, tools, and technologies I am really good at:
                </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-8 gap-6 mt-8 text-center">
                <SkillCard imageSrc="icon-javscript.png" skillName="Javascript" />
                <SkillCard imageSrc="icon-typescript.svg" skillName="TypeScript" />
                <SkillCard imageSrc="icon-react.svg" skillName="React" />
                <SkillCard imageSrc="icon-nextjs.svg" skillName="Next.js" />
                <SkillCard imageSrc="icon-nodejs.svg" skillName="Node.js" />
                <SkillCard imageSrc="icon-express.svg" skillName="Express.js" />
                <SkillCard imageSrc="icon-nest.svg" skillName="Nest.js" />
                <SkillCard imageSrc="icon-socket.svg" skillName="Socket.io" />



                <SkillCard imageSrc="icon-postgresql.svg" skillName="PostgreSQL" />
                <SkillCard imageSrc="icon-mongodb.svg" skillName="MongoDB" />
                <SkillCard imageSrc="icon-sass.svg" skillName="Sass/Scss" />
                <SkillCard imageSrc="icon-tailwindcss.svg" skillName="Tailwindcss" />
                <SkillCard imageSrc="icon-figma.svg" skillName="Figma" />
                <SkillCard imageSrc="icon-cypress.svg" skillName="Cypress" />
                <SkillCard imageSrc="icon-storybook.svg" skillName="Storybook" />
                <SkillCard imageSrc="icon-git.svg" skillName="Git" />
            </div>
        </div>
    );
}

function SkillCard({ imageSrc, skillName }) {
    return (
        <div className="items-center justify-center">
            <img className="h-12 w-12 m-auto" src={imageSrc} alt={skillName} />
            <p className="text-gray-600">{skillName}</p>
        </div>
    );
}
