import React from 'react';

export default function Range() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Range Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">range</code> input type creates a slider control for inputting numeric values within a specific range. Users can drag the slider handle to select a value.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Adjustable Range:</strong> The <code className="bg-gray-200 text-gray-800 px-1 rounded">min</code> and <code className="bg-gray-200 text-gray-800 px-1 rounded">max</code> attributes define the range of values.</li>
                    <li><strong>Step Value:</strong> The <code className="bg-gray-200 text-gray-800 px-1 rounded">step</code> attribute sets the increment between allowed values.</li>
                    <li><strong>User Interaction:</strong> Users can easily adjust the value by dragging the slider.</li>
                </ul>

                <label htmlFor="volume" className="block my-2 text-lg font-semibold text-gray-700">Volume Control</label>
                <input type="range" id="volume" min="0" max="100" step="1"
                       className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" />
            </div>
        </div>
    );
}
