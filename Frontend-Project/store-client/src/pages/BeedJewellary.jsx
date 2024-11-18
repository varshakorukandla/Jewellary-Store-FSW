import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getBeedJewellary } from '../api/api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const BeedJewellary = () => {
    const [beedjewellary, setBeedJewellary] = useState(null)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [fitlerBeedJewellary, setFilterBeedJewellary] = useState([])
    async function fetchData() {
        try {
            const res = await getBeedJewellary()
            if (res.status === 200) {
                setBeedJewellary(res.data)
                setFilterBeedJewellary(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setQuery(query)

        if (beedjewellary) {
            const filtered = beedjewellary.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setFilterBeedJewellary(filtered)
        }
    };


    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <>
                <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                    <Loader2 className='text-red-800 h-14 w-14 animate-spin' />
                </div>
            </>
        )
    }
    if (!beedjewellary || beedjewellary.length === 0) {
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
            {/* { <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'> */}

                {/* {beedjewellary.map((product, index) => (
                    <ProductCard img={product.img} title={product.title} price={product.price}  brand={product.brand}key={product._id} />
                ))
                } */}
            {/* </div> } */}
            <div className='w-screen h-full flex flex-col justify-center items-center'>
                <div className='w-full h-[4rem] flex justify-center items-center'>
                    <input type="text" name="" id="" value={query} onChange={handleSearch} className='w-[50%] bg-[#f5f5f7] shadow-md border-b-2 border-transparent p-2 rounded-sm focus:shadow-red-400 focus:outline-none focus:border-b-2 focus:border-red-800' placeholder='Filter Products'/>
                </div>
                <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
                {(!fitlerBeedJewellary || fitlerBeedJewellary.length === 0) ? (
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <TriangleAlert className='text-orange-400 h-12 w-12' />
                            <p>
                                No Products Available !
                            </p>
                        </div>
                    ) : (
                        <>
                            {
                                fitlerBeedJewellary.map((product, index) => (
                                    <ProductCard img={product.img} title={product.title} price={product.price}  brand={product.brand} key={product._id} /*pid={product._id} /*auth={auth} uid={uid} */ />
                                ))
                            }
                        </>
                    )
                    }
                </div>   
            </div>
           
        </>
    )
}

export default BeedJewellary