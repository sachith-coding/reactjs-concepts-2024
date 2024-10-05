import React, { useEffect, useState } from 'react'

const Users = () => {

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false)

    function handleFetchUsers()
    {
        fetchApiData()
    }

    async function fetchApiData() {
        try
        {
            setLoading(true)
            const apiData = await fetch('https://dummyjson.com/users');
            const jsonData = await apiData.json()

            if(jsonData?.users){
                setUserList(jsonData?.users)
                setLoading(false)
            }
            else{
                setUserList([])
                setLoading(false)
            }
        }
        catch(ex)
        {
            console.log(ex);            
        }
    }

    // useEffect(() => {
    //     fetchApiData()
    // }, [])

    if(loading)
        return (<p>Loading Data. Please wait!</p>)

    return (
        <div>
            <h2>Fetch All Users</h2>
            <button onClick={handleFetchUsers}>Load Users</button>
            <ul>
                {
                    userList != null && userList.length > 0 
                    ? userList.map((userItem) => (
                        <li key={userItem?.id}>{userItem?.firstName} {userItem?.lastName}</li>
                    ))
                    : <p>No users found. Please try again.</p>


                }
            </ul>
        </div>
    )
}

export default Users