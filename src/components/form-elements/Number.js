import React from 'react';

export default function Number() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Number Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">number</code> input type is designed for numeric inputs. It allows users to enter a number, either by typing or by using the stepper controls.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Validation:</strong> Ensures only numeric values are entered.</li>
                    <li><strong>Step Control:</strong> Allows incrementing or decrementing values with stepper arrows.</li>
                    <li><strong>Min and Max:</strong> Can define a range of acceptable values using <code className="bg-gray-200 text-gray-800 px-1 rounded">min</code> and <code className="bg-gray-200 text-gray-800 px-1 rounded">max</code> attributes.</li>
                    <li><strong>Input Restrictions:</strong> Helps in restricting the input to numbers only, avoiding invalid data entries.</li>
                </ul>

                <label htmlFor="quantity" className="block text-2xl font-semibold text-gray-700 mb-2">Quantity</label>
                <input type="number" id="quantity" placeholder="Enter quantity" className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
            </div>
        </div>
    );
}
