import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { techData } from './TechStackData'
import { toolsData } from './ToolsData'
const WhatIknow = () => {
    return (
        <section className="centerFlex flex-col m-auto max-w-6xl pb-16 min-h-screen" id="skills" name="skills">
            <h2 className="flex mb-16">
                <ChevronRightIcon className="h-10 text-yellow-500"/>
                What I know
                <ChevronLeftIcon className="h-10 text-yellow-500"/>
            </h2>
            <article className="mb-32">
                <h3 className="text-2xl text-center mb-12">My tech stack</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-16">
                    {techData.map((tech) => {
                        const {id, text, src} = tech;
                        return(
                            <li key={id} className="centerFlex flex-col text-center">
                                <img src={src} alt={text} className="h-16 mb-2"/>
                                <p className="font-medium uppercase">{text}</p>
                            </li>
                        )
                    })}
                </ul>
            </article>
            <article>
                <h3 className="text-2xl text-center mb-12">Tools that I use</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-16" >
                    {toolsData.map((tool) => {
                        const {id, text, src} = tool;
                        return(
                            <li key={id} className="centerFlex flex-col text-center">
                                <img src={src} alt={text} className="h-16 mb-2"/>
                                <p className="font-medium uppercase">{text}</p>
                            </li>
                        )
                    })}
                </ul>
            </article >
        </section >
    )
}

export default WhatIknow
