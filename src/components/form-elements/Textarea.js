import React from 'react';

export default function Textarea() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Textarea Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">textarea</code> element creates a
                    multi-line text input field that can accept larger amounts of text. It's commonly used for notes,
                    comments, or other longer text entries.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Multi-line Input:</strong> Allows for multiple lines of text input.</li>
                    <li><strong>Customizable Rows:</strong> You can set the number of visible rows.</li>
                    <li><strong>Placeholder Text:</strong> Use the <code
                        className="bg-gray-200 text-gray-800 px-1 rounded">placeholder</code> attribute to provide
                        a hint for the expected content.
                    </li>
                    <li><strong>Automatic Resizing:</strong> Can be styled to adjust its height dynamically.</li>
                </ul>

                <div className="mt-4">
                    <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700"> Order notes </label>
                    <textarea
                        id="OrderNotes"
                        className="mt-2 w-full rounded-lg border border-gray-300 p-2 text-gray-700 placeholder-gray-500 shadow-sm sm:text-sm"
                        rows="4"
                        placeholder="Enter any additional order notes..."
                    ></textarea>
                </div>
            </div>
        </div>
    )
}
