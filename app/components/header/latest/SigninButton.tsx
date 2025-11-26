import React, { useEffect, useState } from 'react'
import { useAuth } from '~/context/AuthContext'
import { getUserProfileImageData } from '~/lib/lib'
import AccountUserImage from '../usermenu/AccountUserImage'
import { BiUser } from 'react-icons/bi'
import DropDown from '../usermenu/DropDown'
import { Link } from '@remix-run/react'

const SigninButton = () => {
    const [open, setOpen] = useState(false)
    const auth = useAuth()
    if (!auth) { return null }
    const { user } = auth

    const showMenu = () => setOpen(true)
    const closeMenu = async () => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        setOpen(false)
    }

    const [userProfileImgData, setUserProfileImgData] = useState<any | null>(null)

    useEffect(() => {

        const getUserImageData = async (guid: string) => {
            const userProfile: any = await getUserProfileImageData(guid)
            setUserProfileImgData(userProfile)
            //console.log(userProfile?.image_url)
        }

        if (user?.guid !== null && user?.guid !== undefined) {

            getUserImageData(user?.guid)
        }
    }, [user])

    return (
        <div className={``}>
            {
                auth.user ?
                    <button
                        onClick={(e) => showMenu()}
                        onBlur={(e) => closeMenu()}

                        className={`w-[30px] h-[30px] bg-gray-400 hover:bg-gray-300 rounded-full text-white flex place-items-center place-content-center text-[13px] relative cursor-pointer`}>
                        {
                            userProfileImgData !== null ?
                                <AccountUserImage userProfileImgData={userProfileImgData} /> :
                                <BiUser className={`object-cover w-[80%] h-[80%]`} />
                        }
                    </button> :
                    <Link to={`/web/signin`}>
                        <button className={` w-[70px] h-[35px] border rounded-full`}>
                            Sign in
                        </button>
                    </Link>
            }
            <DropDown open={open} />
        </div>
    )
}

export default SigninButton
