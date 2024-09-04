import React from 'react';

export default function File() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">File Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">file</code> input type allows users to select and upload files from their local system. It supports multiple file selection, filtering by file types, and can trigger various file-handling events.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>File Selection:</strong> Users can choose a file or multiple files from their device.</li>
                    <li><strong>Accept Attribute:</strong> Use the <code className="bg-gray-200 text-gray-800 px-1 rounded">accept</code> attribute to specify the types of files that can be selected.</li>
                    <li><strong>Drag and Drop:</strong> Some modern browsers support drag-and-drop functionality for file inputs.</li>
                    <li><strong>File Validation:</strong> Allows validation of file types, sizes, and more before upload.</li>
                </ul>

                <label htmlFor="file-upload" className="block my-2 text-xl font-semibold text-gray-700">Upload File</label>
                <input type="file" id="file-upload" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
        </div>
    );
}
