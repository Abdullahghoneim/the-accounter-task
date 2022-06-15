import React from 'react'

function Checkbox({ label, checked, register, ...rest }) {
    return (
        <div class="flex items-center mb-4">
            <input id="default-checkbox" {...register} {...rest} type="checkbox" value="" checked={checked} className="w-4 h-4 text-[#04C35C] bg-gray-100 rounded border-gray-300 focus:ring-[#04C35C] dark:focus:ring-[#04C35C] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {label} </label>
        </div>
    )
}

export default Checkbox