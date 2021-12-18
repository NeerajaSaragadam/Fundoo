import axios from "axios";

export const UserSignIn = async (obj) => {
    console.log("signobj",obj);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",obj)
    return response 
}

export const UserSignUp = async (obj) => {
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",obj)
    return response 
}




// export const UserSignIn = () => {
//     console.log("hii");
// }