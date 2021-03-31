import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()

    const getCookie = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/auth/check', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const { cookie } = await response.json()
            if (!cookie) {
                setUser(null)
            }
            setUser(cookie)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCookie()
    }, [])

      return (
          <AuthContext.Provider value={user}>{ children }</AuthContext.Provider>
      )
}

export default AuthContextProvider