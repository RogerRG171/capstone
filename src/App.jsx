import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/user/user.action';


const App = ()=> {

  //redux
  const dispatch = useDispatch()

  //hooks
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener(async (user) =>{
      if(user){        
        await createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubcribe
  }, []) 

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
