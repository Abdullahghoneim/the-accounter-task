import React from 'react'


// ** Input Component with label **
function Input({ label, id, placeholder, type, register, ...rest }) {
    return (
        <div className='flex mt-8 flex-col gap-5' >
            <label className='text-[#4A5568]' htmlFor={id}> {label} </label>
            <input  {...register} type={type} placeholder={placeholder} className="border-[#E8E8E8] rounded border p-3 w-full"  {...rest} />
        </div>
    )
}

export default Input