import React, { useEffect, useState } from 'react'
import { ShortMenuJson } from './ShortMenuJson'
import { Link, useLocation } from '@remix-run/react'
import { CgChevronDown, CgChevronRight } from 'react-icons/cg'
import { BsExclamation } from 'react-icons/bs'

const ShortMenu = () => {

    const location = useLocation()

    return (
        <div className={`lg:flex gap-8 hidden px-4 place-items-center`}>

            <SearchLink />


            {
                ShortMenuJson.map((item, index: number) => {
                    return (
                        <div key={index} className={`hover:text-[#6001D2] `}>
                            <Link to={item.url}>
                                <div className={`flex place-items-center group hover:underline px-3 py-2  rounded-md hover:bg-blue-100 hover:text-black ${location.pathname === item.url ? 'underline bg-blue-700 text-white' : 'bg-gray-100'}`}>
                                    <div className={`text-[14px]`}>
                                        {item.title}
                                    </div>
                                    <CgChevronRight
                                        className={`text-[15px] relative group-hover:rotate-90 transition-all ease-in-out duration-500 font-bold `} />
                                </div>
                            </Link>
                        </div>
                    )
                })
            }

            {/* <div className={` hover:text-[#6001D2]`}>
                <Link to={`#`}>
                    <div className={`flex place-items-center gap-1 text-[14px]`}>
                        <span>
                            More
                        </span>
                        <span className={`top-[1px]`}>
                            <CgChevronDown />
                        </span>
                    </div>
                </Link>
            </div> */}
        </div>
    )
}

export default ShortMenu


export const SearchLink = () => {
    return (
        <div className={``}>
            <Link to={'/web/search'}>
                <div className={`flex place-items-center group`}>
                    <div className={`text-[14px] font-normal py-2 px-3  hover:bg-blue-100 rounded-md text-black hover:text-blue-700 ${location.pathname.includes('/web/search') ? 'underline bg-blue-600 text-white' : 'bg-gray-100'}`}>
                        Search
                    </div>

                </div>
            </Link>
        </div>
    )
}
