import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const [store, setStore] = useState({
        path: 'https://blog-flask-api.onrender.com',
        posts: []
    })

    const [actions] = useState({
        getPosts: async () => {
            try {
                
                const response = await fetch(`${store.path}/api/posts`)

                const data = await response.json()

                console.log(data)

                setStore((store) => ({ ...store, posts: data.posts }))

            } catch (error) {
                console.log(error)
            }
        }
    })

    useEffect(() => {
        actions.getPosts()
    }, [])

    return (
        <AppContext.Provider value={{ store, actions }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider