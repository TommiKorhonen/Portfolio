import React, { useState, useEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import emailjs from "emailjs-com"
import validation from './validation'

const Contact = () => {
    const [values, setValues] = useState( {
        name:"",
        email:"",
        message:""
    })
    // const [name , setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [formIsSumbitted, setFormIsSumbitted] = useState(false);
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    
    let handleChange = (e) => {
        setValues( {
            ...values,
            [e.target.name]: e.target.value,
        })
    } 
    const sendEmail = ((e) => {
        e.preventDefault(); 
        if (values.name && values.email && values.message) {
            emailjs.sendForm(
                "service_5t55s1k",
                "template_fqg0bmi",
                e.target,
                "user_jC3PlzKXZ39HqQQZK5Qp8"
            ).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
            setErrors(validation(values));
            setDataIsCorrect(true);
            setFormIsSumbitted(false);
    })
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            setFormIsSumbitted(true);
            setValues({name:"", email:"", message:""});
            
        }
        
    }, [errors]);
    return (
        <section className="centerFlex flex-col m-auto pt-16 pb-8 max-w-5xl min-h-screen" id="contact" name="contact">
            <h2 className="flex mb-12">
                <ChevronRightIcon className="h-10 text-yellow-500"/>
                Contact
                <ChevronLeftIcon className="h-10 text-yellow-500"/>
            </h2>
            <div className={formIsSumbitted ? "centerFlex flex-col text-center bg-green-400 rounded-md p-4 min-w-96": "hidden"}>
                <h3 className="text-2xl font-semibold">Thank you for getting in touch!</h3>
                <p>I appreciate you contacting me. I will get back in touch with you soon!Have a great day!</p>
            </div>
            <div className="px-8 rounded-md centerFlex flex-col w-full max-w-3xl mx-auto">
                <form className="p-8 flex flex-col gap-4 w-full" onSubmit={sendEmail}>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" name="name" value={values.name} onChange={handleChange}
                        className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 w-full max-w-2xl" />
                        {errors.name && <p className="mt-3 text-white bg-red-500 w-40 text-center rounded-sm">{errors.name}</p>}
                    </label>
                    
                    <label htmlFor="email">
                        E-mail
                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange}  className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 w-full max-w-2xl" />
                        {errors.email && <p className="mt-3 text-white bg-red-500 w-40 text-center rounded-sm">{errors.email}</p>}
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea name="message" id="message" cols="30" rows="10" value={values.message} onChange={handleChange} className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 resize-none w-full max-w-2xl" ></textarea>
                        {errors.message && <p className="mt-3 text-white bg-red-500 w-40 text-center rounded-sm">{errors.message}</p>}
                    </label>
                    <button className="btn" type="submit" value="Send">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
