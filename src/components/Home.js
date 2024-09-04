import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="lg:px-16 px-4 bg-white">
            <div className="m-5 flex flex-col space-y-4 space-y-reverse justify-center items-center">
                <h1 className="order-last text-2xl text-gray-700">
                    <Link to="/trial">Could you look up<b> Free </b>Trial?</Link>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-center text-pretty text-base/relaxed text-gray-700"><span style={{color: 'red'}}>FormsTreep</span> is a
                    collection
                    of free Tailwind CSS Input components that can be used in your next project. With a range of
                    components,
                    you can build your next authenticational website, admin dashboard and much more.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center py-2">
                <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/" className="block no-underline">
                        <h3 className="text-lg font-semibold text-center mb-4">Text Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/textarea" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Textarea Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/email" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Email Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/password" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Password Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/number" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Number Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/date" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Date Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/range" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Range Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/checkbox" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Checkbox Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/radio" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Radio Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/select" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Select Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/file" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">File Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/telephone" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Tel Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/url" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">URL Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/search" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Search Input</h3>
                </Link>
            </div>

            <div className="card m-2 bg-white shadow-lg rounded-lg p-6 w-72">
                <Link to="/color" className="block no-underline">
                    <h3 className="text-lg font-semibold text-center mb-4">Color Input</h3>
                </Link>
            </div>
            </div>
        </div>
    );
}
