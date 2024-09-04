import React from 'react';

export default function Checkbox() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Checkbox Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">checkbox</code> input type allows users
                    to select one or more options from a set. Each checkbox can be either checked or unchecked.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Multiple Selections:</strong> Users can select more than one option.</li>
                    <li><strong>Custom Styles:</strong> Can be styled for better UX and visual appeal.</li>
                    <li><strong>Accessibility:</strong> Use <code className="bg-gray-200 text-gray-800 px-1 rounded">label</code>
                        elements to associate text with checkboxes.
                    </li>
                </ul>

                <fieldset>
                    <legend className="sr-only">Checkboxes</legend>

                    <div className="space-y-4">
                        <label
                            htmlFor="Option1"
                            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" id="Option1" />
                            </div>
                            <div>
                                <strong className="font-medium text-gray-900"> John Clapton </strong>
                                <p className="mt-1 text-sm text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </label>

                        <label
                            htmlFor="Option2"
                            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" id="Option2" />
                            </div>
                            <div>
                                <strong className="font-medium text-gray-900"> Peter Mayer </strong>
                                <p className="mt-1 text-sm text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </label>

                        <label
                            htmlFor="Option3"
                            className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
                        >
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" id="Option3" />
                            </div>
                            <div>
                                <strong className="font-medium text-gray-900"> Eric King </strong>
                                <p className="mt-1 text-sm text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}
