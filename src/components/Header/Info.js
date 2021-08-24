import React, {useState} from 'react'
import {data} from "./InfoData"
const Info = () => {
    const [hover,setHover] = useState(false);
    const [selectElement, setSelectElement] = useState(0);
    const toggleHover = () => {
        setHover(!hover)  
    }
    const handleHover = (id) => {
        setSelectElement(id)
    }

    return (
        <section className="grid sm:grid-cols-1 md:grid-cols-3">
            {data.map((info) => {
                const {id, text, paragraph} = info;
                return (
                    <article onMouseEnter={() => handleHover(id)} onMouseLeave={() => toggleHover(id)} key={id} className={selectElement === id ? "border-t-4 p-5 border-gray-700 relative opacity-100 after:opacity-80 after:absolute after:bg-yellow-400 after:-top-1 after:left-0 after:h-1 after:w-1/4" : "border-t-4 p-5 border-gray-700 relative opacity-80 after:absolute after:bg-yellow-400 after:-top-1 after:left-0 after:h-1 after:w-1/4 after:opacity-0"}>
                        <h2 className="text-xl font-semibold">{text}</h2>
                        <p>{paragraph}</p>
                    </article>
                )
            })}
        </section>
    )
}

export default Info
