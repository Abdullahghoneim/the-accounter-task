import React, { useCallback } from 'react'
import Button from '../Button'
import Input from '../Input'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const validationSchema = yup.object({
    email: yup.string().required("Email Required").email('Invalid Email'),
    password: yup.string().required("Password Required")
});

function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
    const onSubmit = data => console.log(data);

    return (
        <div className='w-full h-full justify-center flex flex-col relative'>
            <p className='text-[#2D3748] font-lg'> welcome back </p>
            <h1 className='text-[#1A202C] mt-1 font-bold text-2xl' >Login to your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Input register={{ ...register("email") }} placeholder="John.snow@gmail.com" label="Email" type="email" />
                {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}
                <Input register={{ ...register("password") }} placeholder="*********" label="Password" type="password" />
                {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}
                <div className='mt-10'>
                    <Button className="bg-[#04C35C] text-white rounded" type="submit" > Login now  </Button>
                </div>
                <div className='mt-5'>
                    <Button className="bg-[#2D3748]  text-white rounded" type="submit" >
                        Or sign-in with google
                    </Button>
                </div>
            </form>
            <div className='w-full absolute bottom-10 text-center'>
                <p className='text-center'>
                    Don't have an account? <a href='/'>Join free today</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForm