import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLeftBar = () => {
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'Bead Jewellery',
      path: '/admin/BeedJewellary'
    },
    {
      title: 'Fashion Jewellery',
      path: '/admin/FashionJewellary'
    },
    {
        title: 'Pendant Jewellery',
        path: '/admin/PendantJewellary'
    },
    {
        title: 'Wedding Jewellery',
        path: '/admin/WeddingJewellary'
    },
    {
      title: 'Users',
      path: '/admin/users'
    },
    {
      title: 'Settings',
      path: '/admin/settings'
    }
  ]
  return (
    <div className='w-full h-screen shadow-purple-400 shadow-md  flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
        <div className='h[20%] w-full hover:text-red-800 flex justify-center font-bold text-2xl items-center'>
          JEWELLERY
        </div>
        <div className='h-[80%] w-full flex flex-col items-center'>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-red-500/90 hover:text-white flex justify-start items-center rounded-sm shadow-md'>
              {link.title}
            </NavLink>
          ))
          }
          </div>
          <div className='h-[10%] w-full flex items-end'>
          <div className='px-8 hover:bg-red-500 w-full h-2/3 hover:text-white flex justify-start font-bold items-center'>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar