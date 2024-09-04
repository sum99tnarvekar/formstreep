import React from 'react';

export default function Radio() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Radio Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">radio</code> input type allows users to select a single option from a set of predefined choices. Unlike checkboxes, only one radio button in a group can be selected at a time.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Exclusive Selection:</strong> Only one option can be selected at a time in a group of radio buttons.</li>
                    <li><strong>Grouped Options:</strong> The <code className="bg-gray-200 text-gray-800 px-1 rounded">name</code> attribute groups radio buttons together.</li>
                </ul>

                <fieldset className="grid grid-cols-2 gap-4">
                    <legend className="sr-only">Delivery Options</legend>

                    <div>
                        <label
                            htmlFor="DeliveryStandard"
                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <div>
                                <p className="text-gray-700">Standard</p>
                                <p className="mt-1 text-gray-900">Free</p>
                            </div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryStandard"
                                id="DeliveryStandard"
                                className="w-5 h-5 border-gray-300 text-blue-500 focus:ring-blue-500"
                                defaultChecked
                            />
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="DeliveryPriority"
                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <div>
                                <p className="text-gray-700">Next Day</p>
                                <p className="mt-1 text-gray-900">£9.99</p>
                            </div>
                            <input
                                type="radio"
                                name="DeliveryOption"
                                value="DeliveryPriority"
                                id="DeliveryPriority"
                                className="w-5 h-5 border-gray-300 text-blue-500 focus:ring-blue-500"
                            />
                        </label>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
