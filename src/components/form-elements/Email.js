import React from 'react';

export default function Email() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Email Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">email</code> input type creates a field
                    specifically for entering email addresses. It includes automatic validation to ensure that the input
                    conforms to the general format of an email address (e.g., <code>user@example.com</code>).
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Validation:</strong> Ensures that the input matches the standard email format.</li>
                    <li><strong>Browser Support:</strong> Supported by most modern browsers with built-in validation.
                    </li>
                    <li><strong>Placeholder Text:</strong> Use the <code
                        className="bg-gray-200 text-gray-800 px-1 rounded">placeholder</code> attribute to provide a
                        hint for the expected format.
                    </li>
                    <li><strong>Autocomplete:</strong> Can be used to provide suggestions based on previous inputs.</li>
                </ul>

                <label htmlFor="UserEmail" className="block my-2 text-2xl font-semibold text-gray-700"> Email </label>
                <input type="email" id="UserEmail" placeholder="john@rhcp.com"
                       className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"/>
            </div>
        </div>
    )
}