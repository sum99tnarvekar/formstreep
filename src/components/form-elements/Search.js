import React from 'react';

export default function Search() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Search Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">search</code> input type is used for entering and submitting search queries. It provides a user-friendly way to search through data or content and often includes features like a clear button.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Clear Button:</strong> Many browsers provide a clear button to quickly clear the input field.</li>
                    <li><strong>Placeholder Text:</strong> Use the <code className="bg-gray-200 text-gray-800 px-1 rounded">placeholder</code> attribute to guide users on what to search for.</li>
                    <li><strong>Autocomplete:</strong> Can be used to suggest previously entered search queries.</li>
                    <li><strong>Browser Support:</strong> Supported by most modern browsers, providing a consistent experience across platforms.</li>
                </ul>

                <div className="relative">
                    <label htmlFor="Search" className="sr-only">Search</label>
                    <input
                        type="search"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                    />
                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                        <button type="button" className="text-gray-600 hover:text-gray-700">
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}
