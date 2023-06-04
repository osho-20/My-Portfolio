import React, { useEffect, useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg('Thanks for your response. Will reply you shortly.')
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => {
            setMsg('');
        }, 10000);
    }
    return (
        <div className="cont">
            <h1>Contact Us</h1>
            <p>Have a question or want to get in touch? Fill out the form below or use the provided contact information.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                {
                    msg !== '' ? <p>{msg}</p> : <></>
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}