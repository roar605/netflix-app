export const checkValidData = (email,password)=>{
    
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);// Minimum eight characters, at least one letter, one number and one special character:
    
    if(!emailRegex) return "Enter valid email"
    if(!passwordRegex) return "Enter valid password"
    return ""
};