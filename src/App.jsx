import {Routes,Route} from 'react-router-dom'

import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Popularity from './Popularity'
import Speciality from './Speciality'
import Feedback from './Feedback';
import Working from './Working';
import Gallery from './Gallery';
// import Order from './Order';
import OrderP2 from './OrderP2';
import Footer from './Footer';
import Cart from './ShopingCart/Cart';
import AdminDashbord from './AdminDashbord';

// apis
import menu from './apis/food';
import galleryApi from './apis/galleryApi';
import popularApi from './apis/popularApi';

// import AdminDashbord from './AdminDashbord';

export default function App() {
  // console.log(menu)
  // console.log(galleryApi)
  return (
    <main>
      <Navbar />
       {/* <Home /> */}

      <Routes>
          {/* <Route exact path='/home' element={<Home />} /> */}
          <Route exact path='/' element={<Home />} />
          <Route exact path='/speciality' element={<Speciality sources={menu}/>} />
          <Route exact path='/popular' element={<Popularity sources={popularApi}/>} />
          <Route exact path='/gallery' element={<Gallery sources = {galleryApi} />} />
          <Route exact path='/review' element={<Feedback />} /> 
          <Route exact path='/working' element={<Working />} /> 
          {/* <Route exact path='/order' element={<Order />} /> */}
          <Route exact path='/order' element={<OrderP2 />} />  
          {/* <Route exact path='/dashbord' element={<AdminDashbord />} />   */}

          <Route exact path='/cart' element={<Cart />} /> 
          <Route exact path='/admin' element={<AdminDashbord />} /> 
      
      </Routes> 

      <Footer />
    </main>
  )
}



