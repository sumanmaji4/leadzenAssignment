import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleUser from '../components/SingleUser'

function UserDetail() {
  const params = useParams()
  let userId = params.userId || 1
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedUser, setFetchedUser] = useState({})
  const [error, setError] = useState()

  // http://localhost:8080/api/user/

  useEffect(() => {
    async function fetchUser() {
      setIsLoading(true)
      const response = await fetch('http://localhost:8080/api/user/' + userId)

      if (!response.ok) {
        setError('Fetching Users failed.')
      } else {
        const resData = await response.json()
        // console.log(resData.user[0])
        setFetchedUser(resData.user[0])
      }
      setIsLoading(false)
    }

    fetchUser()
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedUser && <SingleUser user={fetchedUser} />}
    </>
  )
}

export default UserDetail
