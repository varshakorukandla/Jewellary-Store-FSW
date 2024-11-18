import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { getBeedJewellaryCount, getFashionJewellaryCount, getPendantJewellaryCount, getWeddingJewellaryCount,  getUsersCount } from '../../api/api'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'
const AdminDashboard = () => {
  const [users, setUsers] = useState(0)
  const [BeedJewellary, setBeedJewellary] = useState(0)
  const [FashionJewellary, setFashionJewellary] = useState(0)
  const [PendantJewellary, setPendantJewellary] = useState(0)
  const [WeddingJewellary, setWeddingJewellary] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount()
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count)
      }
      const BeedJewellaryresponse = await getBeedJewellaryCount()
      if (BeedJewellaryresponse.status === 200) {
        setBeedJewellary(BeedJewellaryresponse.data.count)
      }
      const FashionJewellaryresponse = await getFashionJewellaryCount()
      if (FashionJewellaryresponse.status === 200) {
        setFashionJewellary(FashionJewellaryresponse.data.count)
      }
      const PendantJewellaryresponse = await getPendantJewellaryCount()
      if (PendantJewellaryresponse.status === 200) {
        setPendantJewellary(PendantJewellaryresponse.data.count)
      }
      const WeddingJewellaryresponse = await getWeddingJewellaryCount()
      if (WeddingJewellaryresponse.status === 200) {
        setWeddingJewellary(WeddingJewellaryresponse.data.count)
      }
    } catch (error) {
      toast.error(error)
    } finally {
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
          <Loader2 className='text-red-800 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  return (
    <div className='w-full min-h-[80vh] flex justify-center items-center'>
      <AdminDashboardHomeCards BeedJewellary={BeedJewellary}  FashionJewellary={FashionJewellary}  PendantJewellary={PendantJewellary}  WeddingJewellary={WeddingJewellary}users={users} />
    </div>
  )
}

export default AdminDashboard