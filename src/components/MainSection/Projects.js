import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon } from '@heroicons/react/solid'
const Projects = () => {
    return (
        <section className="centerFlex flex-col m-auto max-w-6xl">
            <h2 className="flex mb-16">
                <ChevronRightIcon className="h-10 text-yellow-500"/>
                Projects
                <ChevronLeftIcon className="h-10 text-yellow-500"/>
            </h2>
        </section>
    )
}

export default Projects
