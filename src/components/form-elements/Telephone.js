import React from 'react';

export default function Telephone() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Telephone Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">tel</code> input type is used for entering and validating telephone numbers. It provides a flexible way to capture phone numbers, allowing various formats depending on user input.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Pattern Attribute:</strong> Use the <code className="bg-gray-200 text-gray-800 px-1 rounded">pattern</code> attribute to specify a regular expression for validating the input.</li>
                    <li><strong>Autocomplete:</strong> Can help users fill out phone numbers based on their previous inputs.</li>
                    <li><strong>International Support:</strong> Allows input of various formats, suitable for international phone numbers.</li>
                    <li><strong>Number Pad:</strong> On mobile devices, it triggers a number pad for easier input.</li>
                </ul>

                <label htmlFor="phone-number" className="block my-2 text-xl font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="phone-number" placeholder="(123) 456-7890" className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
            </div>
        </div>
    );
}
