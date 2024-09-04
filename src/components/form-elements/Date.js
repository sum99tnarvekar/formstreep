import React from 'react';

export default function Date() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Date Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">date</code> input type provides a date picker for users to select a date from a calendar. This input type is ideal for collecting dates such as birthdays, appointments, or deadlines.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li><strong>Calendar Picker:</strong> Provides an interactive calendar for selecting dates.</li>
                    <li><strong>Browser Support:</strong> Supported by most modern browsers, with fallback to a text input on older browsers.</li>
                    <li><strong>Min and Max Dates:</strong> You can restrict the range of selectable dates using <code className="bg-gray-200 text-gray-800 px-1 rounded">min</code> and <code className="bg-gray-200 text-gray-800 px-1 rounded">max</code> attributes.</li>
                    <li><strong>Validation:</strong> Ensures the input follows a valid date format.</li>
                </ul>

                <label htmlFor="appointmentDate" className="block text-2xl font-semibold text-gray-700 mb-2">Appointment Date</label>
                <input type="date" id="appointmentDate" placeholder="Select a date" className="p-2 mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
            </div>
        </div>
    );
}
