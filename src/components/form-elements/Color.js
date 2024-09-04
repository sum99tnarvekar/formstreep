import React from 'react';

export default function Color() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Color Input Type</h2>
                <p className="text-gray-700 mb-4">
                    The <code className="bg-gray-200 text-gray-800 px-1 rounded">color</code> input type allows users to select a color from a color picker. This input is useful for picking colors in various applications like design tools or customization settings.
                </p>
                <p className="text-gray-700 mb-4">
                    Key features include:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                    <li><strong>Color Picker:</strong> Provides a graphical color picker to choose a color.</li>
                    <li><strong>Value Format:</strong> Returns the color in hex format (e.g., <code>#ff0000</code>).</li>
                    <li><strong>Browser Support:</strong> Supported by most modern browsers with built-in color pickers.</li>
                    <li><strong>Placeholder Text:</strong> Use the <code className="bg-gray-200 text-gray-800 px-1 rounded">placeholder</code> attribute to provide a hint for color selection.</li>
                </ul>

                <div>
                    <label htmlFor="ColorPicker" className="block text-sm font-medium text-gray-700">Pick a Color</label>
                    <input
                        type="color"
                        id="ColorPicker"
                        className="w-full mt-2 rounded-md border-gray-200 py-2.5 shadow-sm sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
}
