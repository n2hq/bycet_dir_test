import { json } from '@remix-run/react';
import React, { useEffect, useState } from 'react'
import { MdError } from 'react-icons/md'
import { controlInformationClass, inputClass, inputControlWrapper, inputHeadingClass } from '~/lib/css'
import { Currency } from '~/lib/types'

export const toTitleCase = (phrase: string): string => {
    if (!phrase || phrase.trim() === '') return '';

    return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// Example: "United Arab Emirates Dirham"

const findCurrencyById = (id: number, currencies: Currency[]): Currency | undefined => {
    const currencyArray = Object.values(currencies);
    const index: number = (id - 1)


    if (index < 0 || index >= currencyArray.length) {
        console.warn(`Country ID ${id} out of range. Array length: ${currencyArray.length}`);
        return undefined;
    }

    const foundCurrency: Currency = currencyArray[index]
    console.log(foundCurrency.id)
    console.log(index)

    if (foundCurrency && foundCurrency.id === index + 1) {
        return foundCurrency;
    } else {
        return currencies[0]
    }
};

const SelectCurrency = ({
    controlName,
    controlTitle,
    controlPlaceholder,
    selectJson,
    register,
    changeHandler,
    error,
    setCode,
    setValue,
    controlInformation
}: any) => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (register && changeHandler && selectJson) {
            setTimeout(() => {
                setReady(true)
            }, 1000)
        }
    }, [register, changeHandler, selectJson])



    return (
        <>
            <div className={inputControlWrapper}>
                <div className={inputHeadingClass}>
                    <div className={`mb-0 text-xl`}>
                        {controlTitle}
                    </div>
                    {
                        controlInformation?.length > 1 && <div className={controlInformationClass}>
                            {controlInformation}
                        </div>
                    }
                </div>
                <div className='w-[90%]'>
                    {
                        ready && <select
                            {...register(controlName, {
                                onChange: (e: any) => {
                                    changeHandler(e)
                                    if (setValue) {
                                        const currency: Currency | undefined = findCurrencyById(e.target.value, selectJson)

                                        setValue("currency", currency?.currency_symbol)
                                    }
                                }
                            })}
                            className={`${inputClass} text-lg`}

                        >
                            <option value="">{controlPlaceholder}</option>
                            {
                                selectJson.map((item: Currency, id: any) => {
                                    return (
                                        <option
                                            key={id} value={item.id}
                                            className={` capitalize`}>
                                            {item.country} - {toTitleCase(item.currency_name)} {item.currency_symbol} {item.emoji}
                                        </option>
                                    )
                                })
                            }
                        </select>

                    }
                    {
                        error &&
                        (
                            <div className={`input__class__error`}>
                                <MdError className='text-lg' />
                                {error.message}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SelectCurrency
