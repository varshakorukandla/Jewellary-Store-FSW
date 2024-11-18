import React from 'react'

const AdminPageHeader = ({ title }) => {
    return (
        <div className='h-10 w-[95%] flex justify-start items-center font-bold text-2xl hover:text-red-800'>
            {title}
        </div>
    )
}

export default AdminPageHeader