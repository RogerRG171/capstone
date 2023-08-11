import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrectUser: ()=> null,
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrectUser] = useState(null)
  const value = {currentUser, setCurrectUser}

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener(async (user) =>{
      if(user){        
        await createUserDocumentFromAuth(user)
      }
      setCurrectUser(user)
    })

    return unsubcribe
  }, [])
  

  return (
   <UserContext.Provider value={value}>
     {children}
   </UserContext.Provider>
  )
}