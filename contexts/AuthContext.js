import React, { createContext, useState, useEffect } from 'react'
import { baseUrl } from '../utils/baseUrl'
import { getId } from '../utils/getId'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [id, setId] = useState()

    const getCookie = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/auth/check`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const { cookie } = await response.json()
            if (!cookie) {
                setUser(null)
                setId(null)
            }
            setUser(cookie)
            const userId = await getId(cookie)
            setId(userId)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCookie()
    }, [user])

      return (
          <AuthContext.Provider value={{user, id}}>{ children }</AuthContext.Provider>
      )
}

export default AuthContextProvider