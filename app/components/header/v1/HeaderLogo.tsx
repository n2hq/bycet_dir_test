import { Link } from '@remix-run/react'
import React from 'react'

const HeaderLogo = () => {
    return (
        <div className={`text-4xl font-bold font-sans tracking-tight text-[rgb(131,39,39)]`}>
            <Link to={`/`} className=''>
                <span className={`italic`}>
                    b
                </span>
                <span>y</span>
                <span className={`text-blue-600`}>
                    cet
                </span>
            </Link>
        </div>
    )
}

export default HeaderLogo
