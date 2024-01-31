//! TRUE = NO ERROR
//! FALSE = ERROR

// Validate String
export const validateString = (inputData: string, maxLength: number) => {
    // inputData < maxLength & not empty -> true -> not error = accept
    // inputData > maxLength or inputData empty -> false -> error
    try {
        return inputData.trim().length < maxLength && inputData.trim().length > 0;
    } catch (e) {
        return e;
    }
}

// Validate Email
export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Phone Number
export const validatePhoneNumber = (phoneNumber: string) => {
    // 0<9digits>
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}


// Validate Date Format (DD/MM/YYYY)
export const validateDateFormat = (date: string) => {
    const dateRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(date);
}


// Validate Password
// 8 - 12 characters
// Contain atleast 1 uppercase, 1 lowercase, 1 special character
export const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_#?!@$%^&*-])[A-Za-z\d_#?!@$%^&*-]{8,12}$/;
    return passwordRegex.test(password);
}



