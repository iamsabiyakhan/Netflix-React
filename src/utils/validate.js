export const checkValidData =(email,password,name)=>{
    const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid  =  /^[a-zA-Z ]{2,50}$/.test(name);

    if(!isEmailValid ) return "invalid email"
    if(!isPasswordValid) return "invalid password"
    if(!isNameValid ) return "invalid name"

    return null;
}