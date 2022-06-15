import React, { useEffect, useState } from 'react'
import httpClient from '../../utils/httpClient'

function CurrencySelection() {

    const [currency, setCurrency] = useState([]);


    const token = localStorage.getItem("access_token")

    const getCurrency = async () => {
        const response = await httpClient.get(`/base/currency/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setCurrency(response.data)
    }

    useEffect(() => {
        getCurrency()
    }, [])

    console.log(currency);


    return (
        <div className='shadow-md h-1/2 w-1/5 rounded-md p-4'>
            <div className='border-b items-center gap-1 flex'>
                <div>
                    <img src="/images/search-interface-symbol.png" alt="" />
                </div>
                <input type="text" className='w-full p-1 outline-none' placeholder='Search' />
            </div>
        </div>
    )
}

export default CurrencySelection