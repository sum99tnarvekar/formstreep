import React from 'react';

export default function ContactUs() {
    return (
        <div className="lg:px-16 px-4 bg-white">
            <div className="m-5 flex flex-col space-y-4 space-y-reverse justify-center items-center">
                <h1 className="order-last text-2xl text-gray-700">
                    Contact <b>FormsTreep</b>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-center text-base/relaxed text-gray-700">
                    We would love to hear from you! If you have any questions, feedback, or need support with <span style={{color: 'red'}}>FormsTreep</span>, please fill out the form below to get in touch with us.
                </p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
                <form className="mt-8 grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                        />
                    </div>

                    <div className="col-span-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your Message"
                            className="mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                        ></textarea>
                    </div>

                    <div className="col-span-6 flex justify-center">
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
