import React from 'react'
import { Children, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ( {children} ) => {
    const [EventRefresh, setEventRefresh] = useState([]);

    const updateEventRefresh = (newValue) => {
        setEventRefresh(newValue);
      };
    
    return (
<>
<UserContext.Provider value={{updateEventRefresh, EventRefresh , setEventRefresh}}>
    {children}
</UserContext.Provider>
</>  )
}

export default UserProvider