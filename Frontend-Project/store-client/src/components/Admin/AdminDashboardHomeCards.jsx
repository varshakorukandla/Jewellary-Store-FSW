import { ChartBar, DollarSign, Package2, ShoppingCart, User2, Users } from 'lucide-react'
import React from 'react'

const AdminDashboardHomeCards = ({ Beedjewellary, Fashionjewellary, Pendantjewellary, Weddingjewellary, users }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-center items-center gap-6">
                <div className="w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-red-800">
                    <div className="w-[70%] h-full flex flex-col justify-center items-start px-4">
                        <p className="text-3xl font-bold">{users}</p>
                        <p className="text-sm font-semibold px-1">Users</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <Users className="w-9 h-9" />
                    </div>
                </div>
                <div className="w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-red-800">
                    <div className="w-[70%] h-full flex flex-col justify-center items-start px-4">
                        <p className="text-3xl font-bold">{Beedjewellary}</p>
                        <p className="text-sm font-semibold px-1">Bead Jewellary</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <Package2 className="w-9 h-9" />
                    </div>
                </div>
                <div className="w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-red-800">
                    <div className="w-[70%] h-full flex flex-col justify-center items-start px-4">
                        <p className="text-3xl font-bold">{Fashionjewellary}</p>
                        <p className="text-sm font-semibold px-1">Fashion Jewellary</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <ShoppingCart className="w-9 h-9" />
                    </div>
                </div>
                <div className="w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-red-800">
                    <div className="w-[70%] h-full flex flex-col justify-center items-start px-4">
                        <p className="text-3xl font-bold">{Pendantjewellary}</p>
                        <p className="text-sm font-semibold px-1">Pendant Jewellary</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <ShoppingCart className="w-9 h-9" />
                    </div>
                </div>
                <div className="w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-200 hover:text-red-800">
                    <div className="w-[70%] h-full flex flex-col justify-center items-start px-4">
                        <p className="text-3xl font-bold">{Weddingjewellary}</p>
                        <p className="text-sm font-semibold px-1">Wedding Jewellary</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <ShoppingCart className="w-9 h-9" />
                    </div>
                </div>
            </div>
        </>
    );
};


export default AdminDashboardHomeCards