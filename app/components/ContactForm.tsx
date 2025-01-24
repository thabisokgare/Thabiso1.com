import React from "react";

const ContactForm = () => {
    return (
        <form
            action="https://formspree.io/f/xgvovveg" // Replace with your Formspree endpoint
            method="POST"
            className="max-w-4xl mx-auto mt-8 space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-500">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full px-4 py-2 text-sm text-zinc-800 bg-zinc-100 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-500">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-4 py-2 text-sm text-zinc-800 bg-zinc-100 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-500">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full px-4 py-2 text-sm text-zinc-800 bg-zinc-100 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-500">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="mt-1 block w-full px-4 py-2 text-sm text-zinc-800 bg-zinc-100 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full px-6 py-2 text-sm font-semibold text-zinc-800 bg-zinc-300 rounded-lg hover:bg-zinc-400 transition duration-300"
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;