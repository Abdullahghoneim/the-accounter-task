import React, { useEffect, useState } from 'react'
import arraySearch from '../../utils/arraySearch';
import httpClient from '../../utils/httpClient';



function CurrencySelection() {

    const [currency, setCurrency] = useState([]);
    const [allList, setAllList] = useState([]);


    const token = localStorage.getItem("access_token")

    const handleOnChange = async (e) => {
        let value = e.target.value;
        // handel search input
        if (value.length > 0) {
            const result = arraySearch(allList, value)
            setCurrency(result)
        }
        // handel clear input
        if (value.length === 0) {
            setCurrency(allList)
        }
    }


    const getCurrency = async () => {
        const response = await httpClient.get(`/base/currency/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setAllList(response.data)
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
                <input type="text" className='w-full p-1 outline-none' onChange={handleOnChange} placeholder='Search' />
            </div>
            <div className='overflow-y-scroll pl-2 h-80'>
                {
                    currency.map((item, index) => {
                        return (
                            <div key={index} className='p-2 flex gap-2 items-center'>
                                <div class="form-check">
                                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary_default checked:border-primary_default focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id={index} />
                                    <label class="form-check-label inline-block text-gray-800" for={index}>
                                        <div className='flex gap-2'>
                                            <img src={item.flag} width={20} alt="" />
                                            <span> {item.name}</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default CurrencySelection