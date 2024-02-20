import * as Yup from "yup";

export const RegisterSchema =Yup.object({
    fullName:Yup.string().min(2).max(30).required("Please enter your Fullname"),
    Governid:Yup.string().min(10).required("Please enter your Valid Id"),
    email:Yup.string().email().required("Please enter your Email"),
    password:Yup.string().min(6).required("Please enter your Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
})