import React from 'react';

export default function Select() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Select Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">select</code> input type allows users to choose from a list of predefined options. It’s commonly used when you want to offer multiple choices without allowing custom input.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Options:</strong> A list of choices can be provided using the <code className="bg-gray-200 text-gray-800 px-1 rounded">option</code> tag inside a <code className="bg-gray-200 text-gray-800 px-1 rounded">datalist</code>.</li>
                    <li><strong>Autocomplete:</strong> Use the <code className="bg-gray-200 text-gray-800 px-1 rounded">datalist</code> attribute for autocompletion, improving user experience.</li>
                    <li><strong>Browser Support:</strong> Supported by all modern browsers.</li>
                </ul>

                <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">Headliner</label>
                    <div className="relative mt-1.5">
                        <input
                            type="text"
                            list="HeadlineActArtist"
                            id="HeadlineAct"
                            className="w-full rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm shadow-sm"
                            placeholder="Please select"
                        />
                        <span className="absolute inset-y-0 end-0 flex w-8 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                />
                            </svg>
                        </span>
                    </div>

                    <datalist name="HeadlineAct" id="HeadlineActArtist">
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </datalist>
                </div>
            </div>
        </div>
    );
}
