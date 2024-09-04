import React, { useState } from 'react';
import UseFormvalidate from "../Custom-Hooks/UseFormvalidate";
import Modal from "./Modal";
import Profile from "./Profile";

export default function Trialform() {
    const [responseData, setResponseData] = useState({
        key: "",
        message: "",
        status: true
    });
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        file_upload: "",
        phone_number: "",
        UserURL: "",
        aboutyourself: "",
        age: "",
        birthdate: "",
        accountType: "accountStandard",
        country: "IN",
        password: "",
        PasswordConfirmation: "",
        marketing_accept: false
    });

    const [ProfileStatus, setProfileStatus] = React.useState(false);
    const [FormStatus, setFormStatus] = React.useState(true);

    const handleChange = (e) => {
        const {id, value, type , files} = e.target;
        if (type === 'radio') {
            setInputData({
                ...inputData,
                accountType: value
            });
        }else if (type === 'file') {
            // Handle file input
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setInputData({
                        ...inputData,
                        [id]: reader.result // Store the base64 encoded image data
                    });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setInputData({
                ...inputData,
                [id]: value
            });
        }
    };

    const handleCloseModal = () => {
        setResponseData({
            status: true
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = UseFormvalidate(inputData)
        if (response.length === 0) {
            setFormStatus(false);
            setProfileStatus(true);
        }else{
            setResponseData(response[0])
        }
    }
    return(
        <>
            {FormStatus && (
                <section className="bg-white m-10">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="absolute inset-0 h-full w-full object-cover opacity-80"
                            />

                            <div className="hidden lg:relative lg:block lg:p-12">
                                <a className="block text-white" href="/">
                                    <span className="sr-only">Home</span>
                                    <svg
                                        className="h-8 sm:h-10"
                                        viewBox="0 0 28 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>

                                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                    Welcome to Squid 🦑
                                </h2>

                                <p className="mt-4 leading-relaxed text-white/90">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum
                                    aliquam,
                                    quibusdam aperiam voluptatum.
                                </p>
                            </div>
                        </section>
                        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                            <div className="max-w-xl lg:max-w-3xl">
                                <div className="relative -mt-16 block lg:hidden">
                                    <a
                                        className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                        href="/"
                                    >
                                        <span className="sr-only">Home</span>
                                        <svg
                                            className="h-8 sm:h-10"
                                            viewBox="0 0 28 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>

                                    <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                        Welcome to Squid 🦑
                                    </h1>

                                    <p className="mt-4 leading-relaxed text-gray-500">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum
                                        aliquam,
                                        quibusdam aperiam voluptatum.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                            First Name
                                        </label>

                                        <input
                                            value={inputData.firstName}
                                            onChange={handleChange}
                                            type="text"
                                            id="firstName"
                                            className={`mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md `}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                            Last Name
                                        </label>

                                        <input
                                            value={inputData.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            id="lastName"
                                            className={`mt-1 w-full p-4 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md `}
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="email"
                                               className="block text-sm font-medium text-gray-700"> Email </label>

                                        <input
                                            value={inputData.email}
                                            onChange={handleChange}
                                            type="text"
                                            id="email"
                                            className="mt-1 w-full rounded-md p-4 border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="file_upload"
                                               className="block text-sm font-medium text-gray-700">Upload
                                            Profile</label>
                                        <input type="file" id="file_upload"
                                               onChange={handleChange}
                                               accept="image/*"
                                               className=" py-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="phone_number"
                                               className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input type="tel" id="phone_number" placeholder="(123) 456-7890"
                                               value={inputData.phone_number}
                                               onChange={handleChange}
                                               className="p-4 mt-1 w-full rounded-md border-gray-200 shadow-md sm:text-sm"/>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="UserURL" className="block text-sm font-medium text-gray-700">Enter
                                            Your
                                            Website URL </label>
                                        <input value={inputData.UserURL} onChange={handleChange} type="url" id="UserURL"
                                               placeholder="https://www.example.com"
                                               className="p-4 mt-1 w-full rounded-md border-gray-200 shadow-md sm:text-sm"/>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="aboutyourself"
                                               className="block text-sm font-medium text-gray-700"> About
                                            yourself </label>
                                        <textarea
                                            value={inputData.aboutyourself}
                                            onChange={handleChange}
                                            id="aboutyourself"
                                            className="mt-2 w-full rounded-lg border-gray-200 p-2 text-gray-700 placeholder-gray-500 shadow-md sm:text-sm"
                                            rows="4"
                                            placeholder="Enter any additional info about yourself..."
                                        ></textarea>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="age"
                                               className="block text-sm font-medium text-gray-700"> Age </label>

                                        <input
                                            onChange={handleChange}
                                            value={inputData.age}
                                            type="number"
                                            id="age"
                                            name="age"
                                            className="mt-1 w-full rounded-md p-4 border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="birthdate"
                                               className="birthdate block text-sm font-medium text-gray-700"> Birthdate </label>

                                        <input
                                            onChange={handleChange}
                                            value={inputData.birthdate}
                                            type="date"
                                            id="birthdate"
                                            name="birthdate"
                                            className="mt-1 w-full rounded-md border-gray-200 p-4 bg-white text-sm text-gray-700 shadow-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="accountStandard"
                                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-md hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <div>
                                                <p className="text-gray-700">Standard Account</p>
                                                <p className="mt-1 text-gray-900">Free</p>
                                            </div>
                                            <input
                                                type="radio"
                                                name="AccountOption"
                                                value="accountStandard"
                                                id="accountStandard"
                                                className="w-5 h-5 border-gray-300 text-blue-500 focus:ring-blue-500"
                                                checked={inputData.accountType === 'accountStandard'}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="accountPremium"
                                            className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium shadow-md hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <div>
                                                <p className="text-gray-700">Premium Account</p>
                                                <p className="mt-1 text-gray-900">£9.99</p>
                                            </div>
                                            <input
                                                type="radio"
                                                name="AccountOption"
                                                value="accountPremium"
                                                id="accountPremium"
                                                className="w-5 h-5 border-gray-300 text-blue-500 focus:ring-blue-500"
                                                checked={inputData.accountType === 'accountPremium'}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="country"
                                               className="block text-sm font-medium text-gray-900">Select
                                            Country</label>
                                        <div className="relative mt-1.5">
                                            <input
                                                type="text"
                                                list="CountryAct"
                                                id="country"
                                                className="w-full rounded-lg border-gray-300 p-4 pe-10 text-gray-700 sm:text-sm shadow-md"
                                                placeholder="Please select"
                                                value={inputData.country}
                                                onChange={handleChange}
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

                                        <datalist name="CountryAct" id="CountryAct">
                                            <option value="IN">India</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="AU">Australia</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="DE">Germany</option>
                                            <option value="FR">France</option>
                                            <option value="JP">Japan</option>
                                            <option value="CN">China</option>
                                            <option value="BR">Brazil</option>
                                        </datalist>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium text-gray-700"> Password </label>

                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="mt-1 p-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                            value={inputData.password}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="PasswordConfirmation"
                                               className="block text-sm font-medium text-gray-700">
                                            Password Confirmation
                                        </label>

                                        <input
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="password_confirmation"
                                            className="mt-1 p-4 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                            value={inputData.PasswordConfirmation}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="marketing_accept" className="flex gap-4">
                                            <input
                                                checked={inputData.marketing_accept}
                                                onChange={handleChange}
                                                type="checkbox"
                                                id="marketing_accept"
                                                name="marketing_accept"
                                                className="size-5 rounded-md border-gray-200 bg-white shadow-md"
                                            />

                                            <span className="text-sm text-gray-700">
                            I want to receive emails about events, product updates and company announcements.
                          </span>
                                        </label>
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to our
                                            <a href="/" className="text-gray-700 underline"> terms and conditions </a>
                                            and
                                            <a href="/" className="text-gray-700 underline">privacy policy</a>.
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                        <button
                                            className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        >
                                            Create an account
                                        </button>

                                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <a href="/" className="text-gray-700 underline">Log in</a>.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </main>
                        {
                            !responseData.status && (
                                <Modal message={responseData.message} onClose={handleCloseModal} />
                            )
                        }
                    </div>
                </section>
            )}
            {ProfileStatus && (
                <Profile UserData={inputData} />
            )}
            </>
    )

}

