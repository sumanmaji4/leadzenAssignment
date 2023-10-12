import { useEffect, useState } from 'react'

import UsersList from '../components/UsersList'

function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedUsers, setFetchedUsers] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true)
      const response = await fetch('http://localhost:8080/api/users')

      if (!response.ok) {
        setError('Fetching Users failed.')
      } else {
        const resData = await response.json()
        // console.log(resData.users)
        setFetchedUsers(resData.users)
      }
      setIsLoading(false)
    }

    fetchUsers()
  }, [])
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedUsers && <UsersList users={fetchedUsers} />}
    </>
  )
}

export default Home
