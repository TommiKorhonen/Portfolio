import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import emailjs from "emailjs-com"
const Contact = () => {
    const sendEmail = ((e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_5t55s1k",
            "template_fqg0bmi",
            e.target,
            "user_jC3PlzKXZ39HqQQZK5Qp8"
        ).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        window.location.reload();
    })
    return (
        <section className="centerFlex flex-col m-auto pt-16 pb-8 max-w-5xl min-h-screen" id="contact" name="contact">
            <h2 className="flex mb-12">
                <ChevronRightIcon className="h-10 text-yellow-500"/>
                Contact
                <ChevronLeftIcon className="h-10 text-yellow-500"/>
            </h2>
            <div className="px-8 rounded-md centerFlex flex-col w-full max-w-3xl mx-auto">
                <form className="p-8 flex flex-col gap-4 w-full" onSubmit={sendEmail}>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" name="name"  className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 w-full max-w-2xl" required/>
                    </label>
                    
                    <label htmlFor="email">
                        E-mail
                        <input type="email" name="email" id="email"  className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 w-full max-w-2xl" required/>
                        </label>
                    <label htmlFor="message">
                        Message
                         <textarea name="message" id="message" cols="30" rows="10" className="rounded-md bg-transparent border border-solid border-twitchPurple p-2 resize-none w-full max-w-2xl" required></textarea>
                        </label>
                    <button className="btn" type="submit" value="Send">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
