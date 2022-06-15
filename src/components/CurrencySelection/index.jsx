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

    return (
        <div className='shadow-md h-1/2 w-1/5 rounded-md '>
            <div className='border-b p-2 items-center gap-1 flex'>
                <div>
                    <img src="/images/search-interface-symbol.png" alt="" />
                </div>
                <input type="text" className='w-full p-1 outline-none' placeholder='Search' />
            </div>
            <div className='overflow-y-scroll pl-2 h-80'>
                {
                    currency.map((item, index) => {
                        return (
                            <div key={index} className='p-2 flex gap-2 items-center'>
                                <div className='flex gap-2'>
                                    <img src={item.flag} width={20} alt="" />
                                    <span> {item.name}</span>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default CurrencySelection