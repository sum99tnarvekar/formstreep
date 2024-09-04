import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile(props) {
    const { UserData } = props;

    // Define base styles
    const baseCardStyle = "relative block overflow-hidden rounded-lg border border-gray-100 bg-gray-100 m-10 p-4 sm:p-6 lg:p-8";

    // Define styles for premium account type
    const premiumCardStyle = "bg-gray-700 border-transparent shadow-lg";
    const premiumTextStyle = "text-white"; // Text color for premium account
    const baseTextSize = "text-base"; // Base text size
    const premiumTextSize = "text-lg"; // Larger text size for premium account

    // Determine the card style and text size based on account type
    const cardStyle = UserData.accountType === "accountPremium" ? `${baseCardStyle} ${premiumCardStyle}` : baseCardStyle;
    const textStyle = UserData.accountType === "accountPremium" ? premiumTextStyle : "text-gray-900"; // Default text color
    const textSize = UserData.accountType === "accountPremium" ? premiumTextSize : baseTextSize; // Default text size

    return (
        <div className={cardStyle}>
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className={`text-lg font-bold mb-5 ${textStyle} sm:text-xl ${textSize}`}>
                        Building a FormsTreep product as a software developer
                    </h3>

                    <p className={`mt-1 text-xs font-medium ${textStyle} ${textSize}`}>By <b>{UserData.firstName} {UserData.lastName}</b>
                    </p>
                    <p className={`mt-1 text-xs font-medium ${textStyle} ${textSize}`}>Email: {UserData.email}</p>
                    <p className={`mt-1 text-xs font-medium ${textStyle} ${textSize}`}>Phone: {UserData.phone_number}</p>
                    <p className={`mt-1 text-xs font-medium ${textStyle} ${textSize}`}>Country: {UserData.country}</p>
                </div>

                <div className="hidden sm:block sm:shrink-0">
                    <img
                        alt=""
                        src={UserData.file_upload || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"}
                        className="size-16 rounded-lg object-cover shadow-sm"
                    />
                </div>
            </div>

            <div className="mt-4">
                <p className={`text-pretty ${textSize} ${textStyle}`}>
                    {UserData.aboutyourself}
                </p>
            </div>

            <dl className="mt-6 flex gap-4 sm:gap-6">
                <div className="flex flex-col-reverse">
                    <dt className={`text-sm font-medium ${textStyle} ${textSize}`}>Birthdate</dt>
                    <dd className={`text-xs ${textStyle} ${textSize}`}>{UserData.birthdate}</dd>
                </div>

                <div className="flex flex-col-reverse">
                    <dt className={`text-sm font-medium ${textStyle} ${textSize}`}>Age</dt>
                    <dd className={`text-xs ${textStyle} ${textSize}`}>{UserData.age}</dd>
                </div>
            </dl>

            <div className="flex justify-center mt-10">
                <Link to="/"
                      className={`inline-block px-4 py-2 text-white font-semibold ${UserData.accountType === "accountPremium" ? 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' : 'bg-blue-500'} rounded-md hover:opacity-80`}>
                    Back to Home
                    <span className={`absolute inset-x-0 bottom-0 h-2 ${UserData.accountType === "accountPremium" ? 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' : 'bg-blue-500'}`}></span>
                </Link>
            </div>
        </div>
    )
}
