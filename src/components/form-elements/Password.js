import React from 'react';

export default function Password() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Password Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">password</code> input type creates a
                    field specifically for entering sensitive information, such as passwords. The input value is masked
                    to protect it from being displayed on the screen.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Masking:</strong> The entered text is hidden, displaying dots or asterisks.</li>
                    <li><strong>Security:</strong> Ideal for collecting sensitive information like passwords.</li>
                    <li><strong>Validation:</strong> You can enforce rules such as minimum length or character types.</li>
                </ul>

                <label htmlFor="UserPassword" className="block my-2 text-lg font-semibold text-gray-700">Password</label>
                <input
                    type="password"
                    id="UserPassword"
                    placeholder="Enter your password"
                    className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />

                <label htmlFor="ConfirmPassword" className="block my-2 text-lg font-semibold text-gray-700">Confirm Password</label>
                <input
                    type="password"
                    id="ConfirmPassword"
                    placeholder="Re-enter your password"
                    className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
            </div>
        </div>
    );
}
