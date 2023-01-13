import {createContext, useState} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [userInfo,setUserInfo] = useState({});
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('')
  return (
    <UserContext.Provider value={{userInfo,setUserInfo,latitude,setLatitude,longitude,setLongitude}}>
      {children}
    </UserContext.Provider>
  );
}
