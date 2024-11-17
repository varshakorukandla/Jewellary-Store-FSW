import React, { useEffect, useState } from 'react'
import WeddingJewellaryCard from '../components/WeddingJewellaryCard'
import { getWeddingJewellary } from '../api/api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const Weddingjewellary = () => {
    const [Weddingjewellary, setWeddingjewellary] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await getWeddingJewellary()
            if (res.status === 200) {
                setWeddingJewellary(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
                </div>
            </>
        )
    }
    if (!WeddingJewellary || WeddingJewellary.length === 0) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <TriangleAlert className='text-orange-400 h-12 w-12' />
                    <p>
                        No Products Available !
                    </p>
                </div>
            </>
        )
    }

    // const img = "https://loremflickr.com/640/480/cats"
    // const name = "Bespoke Fresh Mouse"
    // const price = "101.00"
    return (
        <>
            <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>

                {WeddingJewellary.map((WeddingJewellary, index) => (
                    <WeddingJewellaryCard img={WeddingJewellary.img} name={WeddingJewellary.title} price={WeddingJewellary.price} key={WeddingJewellary._id} />
                ))
                }
            </div>
        </>
    )
}

export default Weddingjewellary