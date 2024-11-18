import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getFashionJewellary } from '../api/api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const FashionJewellary = () => {
    const [fashionjewellary, setFashionJewellary] = useState(null)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [fitlerProduct, setFilterProduct] = useState([])
    async function fetchData() {
        try {
            const res = await getFashionJewellary()
            if (res.status === 200) {
                setFashionJewellary(res.data)
                setFilterProduct(res.data)
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

        if (fashionjewellary) {
            const filtered = fashionjewellary.filter((product) =>
                product.title.toLowerCase().includes(query)
            );
            setFilterProduct(filtered)
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
    if (!fashionjewellary || fashionjewellary.length === 0) {
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
                {(!fitlerProduct || fitlerProduct.length === 0) ? (
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <TriangleAlert className='text-orange-400 h-12 w-12' />
                            <p>
                                No Products Available !
                            </p>
                        </div>
                    ) : (
                        <>
                            {
                                fitlerProduct.map((product, index) => (
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

export default FashionJewellary