export default function UseFormvalidate(formdata) {
    const responseData = [];
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s-]{7,15}$/; // Simple regex for international phone numbers
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const validImageTypes = ['jpeg', 'jpg', 'png', 'webp'];
    let formAge = null, calculatedAge = null, password = null, confirmPassword = null;
    if (formdata && typeof formdata === 'object' && !Array.isArray(formdata)) {
        const entries = Object.entries(formdata);
        const filteredEntries = entries.filter(([key, value]) => value === "" || value === false); //"Filtered Entries with Empty Values:"
        const firstEmptyEntry = filteredEntries.some(([key, value]) => {
            if (!value) {
                responseData.push({ key: key, message: `Your ${key} is empty`, status: false });
                return true; // Breaks the loop by returning true
            }
            return false; // Continues the loop if the value is not empty
        });

        // If no fields are empty, return the response
        if (!firstEmptyEntry) {
            entries.forEach(([key, value]) => {
                if (key === "email" && !emailRegex.test(value)) {
                    responseData.push({ key: key, message: `Your email address is invalid`, status: false });
                    return true; // Breaks the loop by returning true
                }
                else if (key === "file_upload") {
                    let fileExtension = "";
                    if (value instanceof File) {
                        fileExtension = value.name.split('.').pop().toLowerCase();
                    } else if (typeof value === 'string') {
                        fileExtension = value.split('.').pop().toLowerCase();
                    }
                    if (!validImageTypes.includes(fileExtension)) {
                        responseData.push({ key: key, message: `Please upload a valid image file (JPEG, JPG, PNG, WEBP)`, status: false });
                        return true;
                    }
                }
                else if(key === "phone_number" && !phoneRegex.test(value)){
                    responseData.push({ key: key, message: `Please enter a valid phone number`, status: false });
                    return true;
                }
                else if (key === "UserURL" && !urlPattern.test(value)){
                    responseData.push({ key: key, message: `Please enter a valid URL`, status: false });
                    return true;
                }
                else if (key === "age") {
                    formAge = isNaN(value) ? parseInt(value, 10) : value
                    if (formAge <= 0 || formAge > 120) {
                        responseData.push({ key: key, message: `Your age must be a valid number between 1 and 120`, status: false });
                        return true;
                    }
                }
                else if(key === "birthdate"){
                    const today = new Date();
                    const birthdate = new Date(value);
                    calculatedAge = today.getFullYear() - birthdate.getFullYear();
                    const monthDiff = today.getMonth() - birthdate.getMonth();
                    const dayDiff = today.getDate() - birthdate.getDate();
                    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                        calculatedAge--;
                    }

                    if (isNaN(birthdate.getTime()) || calculatedAge < 18) {
                        responseData.push({ key: key, message: `You must be at least 18 years old`, status: false });
                        return true;
                    }
                }
                else if(key === "password" && !passwordRegex.test(value)){
                    password = value
                    responseData.push({ key: key, message: `Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character`, status: false });
                    return true;
                }
                else if(key === "PasswordConfirmation" && !passwordRegex.test(value)){
                    confirmPassword = value
                    responseData.push({ key: key, message: `Confirm Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character`, status: false });
                    return true;
                }
                return false; // Continues the loop if the value is not empty
            });

            if (formAge !== null && calculatedAge !== null && (Number(formAge)) !== calculatedAge) {
                responseData.push({ key: 'age', message: `The provided age does not match the calculated age based on the birthdate`, status: false });
                return responseData;
            }

            if(password !== confirmPassword){
                responseData.push({ key: 'password', message: `The provided password does not match with confirm password`, status: false });
                return responseData;
            }
        }
        return responseData
    } else {
        console.error("formdata is not a valid object.");
    }
}
