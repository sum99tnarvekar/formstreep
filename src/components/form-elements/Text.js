import React from 'react';

export default function Text() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Text Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">text</code> input type creates a
                    field specifically for entering text. It is a basic input type that allows users to input any
                    text value. Unlike other input types, it does not provide any built-in validation.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Flexibility:</strong> Allows any text input without constraints.</li>
                    <li><strong>Placeholder Text:</strong> Use the <code
                        className="bg-gray-200 text-gray-800 px-1 rounded">placeholder</code> attribute to guide users on what to enter.
                    </li>
                    <li><strong>Autocomplete:</strong> Can be used to provide suggestions based on previous inputs.</li>
                    <li><strong>Simple Validation:</strong> Basic HTML5 validation attributes like <code
                        className="bg-gray-200 text-gray-800 px-1 rounded">required</code> can be used if needed.
                    </li>
                </ul>

                <label htmlFor="UserText" className="block my-2 text-2xl font-semibold text-gray-700"> Text </label>
                <input type="text" id="UserText" placeholder="Enter your text here"
                       className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
        </div>
    )
}
