import React from 'react'
import LoginForm from '../../components/LoginForm'
export default function LoginPage() {
    return (
        <div className='flex min-h-screen'>
            <section className='lg:w-1/2' style={{
                backgroundImage: "url(/images/login.png)",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} >
            </section>
            <section className='md:w-1/2 w-full  flex items-center p-10 md:px-44'>
                <LoginForm />
            </section>
        </div>
    )
}
