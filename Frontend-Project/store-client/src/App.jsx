import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import BeedJewellary from './pages/BeedJewellary'
import FashionJewellary from './pages/FashionJewellary'
import PendantJewellary from './pages/PendantJewellary'
import WeddingJewellary from './pages/WeddingJewellary'
import WebLayout from './layout/WebLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import TwClasses from './pages/TwClasses'
import AdminBeedJewellary from './pages/Admin/AdminBeedJewellary'
import AdminFashionJewellary from './pages/Admin/AdminFashionJewellary'
import AdminPendantJewellary from './pages/Admin/AdminPendantJewellary'
import AdminWeddingJewellary from './pages/Admin/AdminWeddingJewellary'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminLayout from './layout/AdminLayout'
import Home from './pages/home'
// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/BeedJewellary' element={<BeedJewellary />} />
                        <Route path='/FashionJewellary' element={<FashionJewellary />} />
                        <Route path='/PendantJewellary' element={<PendantJewellary />} />
                        <Route path='/WeddingJewellary' element={<WeddingJewellary />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/temp' element={<TwClasses />} />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/BeedJewellary' element={<AdminBeedJewellary />} />
                        <Route path='/admin/FashionJewellary' element={<AdminFashionJewellary />} />
                        <Route path='/admin/PendantJewellary' element={<AdminPendantJewellary />} />
                        <Route path='/admin/WeddingJewellary' element={<AdminWeddingJewellary />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App