import React from 'react';

export default function About() {
    return (
        <div className="lg:px-16 px-4 bg-white">
            <div className="m-5 flex flex-col space-y-4 space-y-reverse justify-center items-center">
                <h1 className="order-last text-2xl text-gray-700">
                    About <b>FormsTreep</b>
                </h1>
                <p className="mx-auto mt-6 max-w-xl text-center text-base/relaxed text-gray-700">
                    <span style={{color: 'red'}}>FormsTreep</span> is a fictional library designed to provide a variety of Tailwind CSS-styled input components, complete with built-in validation features. Whether you're creating a simple contact form or a complex user registration system, <span style={{color: 'red'}}>FormsTreep</span> aims to simplify the process with its easy-to-use components and validation support.
                </p>
                <p className="mx-auto mt-6 max-w-xl text-center text-base/relaxed text-gray-700">
                    Our library includes comprehensive validation options for various input types, ensuring that user data is accurate and conforms to expected formats. Features include:
                </p>
                <ul className="mx-auto mt-6 max-w-xl text-center text-base/relaxed text-gray-700 list-disc list-inside">
                    <li><strong>Text Inputs:</strong> Validate required fields, enforce character limits, and apply custom patterns.</li>
                    <li><strong>Email Inputs:</strong> Automatically validate email format and domain.</li>
                    <li><strong>Password Inputs:</strong> Enforce password strength rules such as minimum length and character variety.</li>
                    <li><strong>Number Inputs:</strong> Ensure numeric input within a specified range and apply decimal precision.</li>
                    <li><strong>Date Inputs:</strong> Validate date formats and ranges, including past or future dates.</li>
                    <li><strong>Select Inputs:</strong> Ensure that a valid option is selected from predefined choices.</li>
                    <li><strong>File Inputs:</strong> Validate file types and sizes before submission.</li>
                    <li><strong>Custom Validation:</strong> Add your own validation rules and error messages for more control.</li>
                </ul>
                <p className="mx-auto mt-6 max-w-xl text-center text-base/relaxed text-gray-700">
                    With <span style={{color: 'red'}}>FormsTreep</span>, you can easily integrate these validation features into your forms, enhancing user experience and ensuring data integrity with minimal effort.
                </p>
            </div>
        </div>
    );
}
