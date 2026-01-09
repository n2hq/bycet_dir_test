import React from 'react'
import HeaderLogo from '../header/v1/HeaderLogo'

const AuthHeader = () => {
    return (
        <div className={`w-full px-[15px] py-3 fixed top-0 left-0`}>
            <HeaderLogo />
        </div>
    )
}

export default AuthHeader
