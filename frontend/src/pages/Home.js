import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import UsersList from '../components/UsersList'

function Home() {
  const [search] = useOutletContext()
  // console.log(search)
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedUsers, setFetchedUsers] = useState([])
  const [error, setError] = useState()
  const [currPage, setCurrpage] = useState(1)
  const [totalItems, setTotalItems] = useState(1)
  const perPage = 3

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true)
      const response = await fetch('http://localhost:8080/api/users')

      if (!response.ok) {
        setError('Fetching Users failed.')
      } else {
        const resData = await response.json()
        const filterData = resData.users.filter((user) =>
          user.name.toLowerCase().includes(search)
        )

        setTotalItems(filterData.length)
        setFetchedUsers(
          filterData.slice(perPage * (currPage - 1), perPage * currPage)
        )
      }
      setIsLoading(false)
    }

    fetchUsers()
  }, [currPage, totalItems, search])

  const onClickHandler = (newPage) => {
    setCurrpage(newPage)
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedUsers && (
        <UsersList
          users={fetchedUsers}
          totalItems={totalItems}
          currPage={currPage}
          onClickHandler={onClickHandler}
        />
      )}
    </>
  )
}

export default Home
