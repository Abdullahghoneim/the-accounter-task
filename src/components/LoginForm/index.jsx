import React, { useContext } from 'react'
import Button from '../Button'
import Input from '../Input'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { AuthContext } from '../../context/auth/auth.context';
import { useNavigate } from 'react-router-dom';
import Checkbox from '../Checkbox';

const validationSchema = yup.object({
    contact: yup.string().required("Email Required").email('Invalid Email'),
    password: yup.string().required("Password Required")
});

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema), defaultValues: {
            contact: 'hussien@theaccounter.test',
            password: '12345678'
        }
    });


    // navigate hook
    const navigate = useNavigate();


    // auth context
    const { authDispatch } = useContext(AuthContext);

    const onSubmit = async (data) => {
        const response = await axios.post(`https://web-dev-api.theaccounter.net/user-management/login/`, data)

        // check if user select remember save token in localstorage 
        if (data.remember) {
            localStorage.setItem("access_token", response.data.access_token);
        }
        authDispatch({
            type: "SIGNIN_SUCCESS",
            payload: response.data
        });
        // redirect to home after login
        navigate('/');
    };

    return (
        <div className='w-full h-full justify-center flex flex-col relative'>
            <p className='text-[#2D3748] font-lg'> welcome back </p>
            <h1 className='text-[#1A202C] mt-1 font-bold text-2xl' >Login to your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input register={{ ...register("contact") }} placeholder="John.snow@gmail.com" label="Email" type="email" />
                {errors?.contact && <p className='text-red-500'>{errors.contact.message}</p>}
                <Input register={{ ...register("password") }} placeholder="*********" label="Password" type="password" />
                {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}
                <div className='flex mt-5 justify-between'>
                    <Checkbox register={{ ...register("remember") }} label="Remember me" />
                    <div>
                        <a href="/" className='text-[#2C5282]'> Forget password ?  </a>
                    </div>
                </div>
                <div className='mt-5'>
                    <Button className="bg-[#04C35C] text-white rounded" type="submit" > Login now  </Button>
                </div>
                <div className='mt-5'>
                    <Button className="bg-[#2D3748] flex items-center justify-center gap-2  text-white rounded" type="submit" >
                        <img src="/images/google.png" width={20} alt="" />
                        Or sign-in with google
                    </Button>
                </div>
            </form>
            <div className='w-full absolute bottom-10 text-center'>
                <p className='text-center'>
                    Don't have an account? <a className='text-[#2C5282]' href='/'>Join free today</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm