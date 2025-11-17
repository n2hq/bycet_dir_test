import { createContext, useContext, useEffect, useState } from "react";
import { TbRotateClockwise2 } from "react-icons/tb";

const LoadingContext = createContext<any | null>(null)

const useLoadingContext = () => {
    const loadingCtx = useContext(LoadingContext)
    if (loadingCtx) {
        return loadingCtx
    }
    return null
}

export default LoadingContext

export const LoadingProvider = ({ children }: any) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {

            setTimeout(() => {

                setLoading(false)
            }, 3000)
        }

    }, [loading])

    const val = {}

    return (
        <LoadingContext.Provider value={val}>
            {children}
            {
                loading === true &&
                <div className="flex justify-center items-center h-screen">
                    <div className="text-lg">

                        <div className=" space-y-2 mb-3 flex place-content-center flex-col place-items-center ">
                            <TbRotateClockwise2 className={'animate-spin'} size={30} />
                            <b className=' tracking-tight'>veycet</b>
                        </div>


                    </div>
                </div>
            }
        </LoadingContext.Provider>
    )
}