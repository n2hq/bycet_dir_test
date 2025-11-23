import React from 'react'
import { BsShop } from "react-icons/bs"
import { FaStore } from 'react-icons/fa'
const SmallPlaceholder = () => {
    return (
        <div className={`bg-gray-100 min-w-full min-h-full flex place-items-center place-content-center  flex-col gap-y-[2px]`}>
            <FaStore className={`text-gray-300 text-2xl relative top-1`} />
            <div className={`text-[8px] text-gray-300 tracking-wide`}>
                BYCET
            </div>
        </div>
    )
}

export default SmallPlaceholder
